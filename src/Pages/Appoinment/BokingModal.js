import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BokingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formatDate = format(date, 'pp')

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slots?.value;
        console.log(_id, name, slot);
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formatDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }

        fetch('https://cryptic-mesa-43832.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    toast(`Your Appointment is set ${formatDate} at ${slot}`)
                } else {
                    toast.error(`Already have an appointment ${data.booking?.date} at ${data.booking?.slot}`)
                }
                refetch()
                setTreatment(null)
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-accent text-center mb-10">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center'>
                        <input disabled type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slots" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name='name' value={user?.displayName} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='email' value={user?.email} disabled className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value='submit' className="btn bg-slate-700 w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BokingModal;