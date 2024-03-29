import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutForm = ({ appointment }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transectionId, setTransectionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { _id, price, patient, patientName } = appointment;

    useEffect(() => {
        fetch("https://doctors-portal-server-production.up.railway.app/create-payment-intent", {
            method: "POST",
            headers: {
                "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || '')
        setSuccess('')
        setProcessing(true)
        // confirm payment method

        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patient,
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
        } else {
            setCardError('')
            setTransectionId(paymentIntent.id)
            setSuccess('Congrats! Your Payment is Successfully')
            const payment = {
                appointment: _id,
                transectionId: paymentIntent.id
            }
            fetch(`https://doctors-portal-server-production.up.railway.app/booking/${_id}`, {
                method: "PATCH",
                headers: {
                    "authorization": `Bearer ${localStorage.getItem('accessToken')}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payment),
            })
                .then(res => res.json())
                .then(data => {
                    setProcessing(false)
                })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-success btn-xs mt-10' type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-900'>{cardError}</p>
            }
            {
                success && <div className='text-green-900'>
                    <p>{success}</p>
                    <p className='text-orange-900 font-bold'>Your transectionId {transectionId}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;