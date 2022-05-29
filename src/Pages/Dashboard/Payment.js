import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query'

const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`
    const { data: appointment, isLoading, refetch } = useQuery(['booking', id], () =>
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
    )

    if (isLoading) {
        return <button type="button" class="text-xl font-bold" disabled>
            Loading....
        </button>
    }
    return (
        <div>
            <div class="card w-2/4 bg-base-100 shadow-xl my-10">
                <div class="card-body">
                    <h1 className="text-success text-2xl">Hello, {appointment.patientName}</h1>
                    <h2 class="card-title">Pay For {appointment.treatment}</h2>
                    <p>We Will See You on <span className='text-orange-900'>{appointment.date}</span> at <span className='text-orange'>{appointment.slot}</span></p>
                    <p>Please pay ${appointment.price}</p>
                </div>
            </div>
            <div class="card w-2/4 bg-base-100 shadow-xl">
                <div class="card-body">

                </div>
            </div>
        </div>
    );
};

export default Payment;