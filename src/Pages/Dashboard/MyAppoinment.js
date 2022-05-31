import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';

const MyAppoinment = () => {
    const [appointment, setAppointment] = useState([]);
    const [user] = useAuthState(auth)

    let navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://cryptic-mesa-43832.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setAppointment(data);
                });
        }
    }, [user, navigate])

    return (
        <div>
            <h1 className='text-center text-purple-800 my-5 font-bold'>my appointment {appointment.length}</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointment.map((appointments, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{appointments.patientName}</td>
                                    <td>{appointments.date}</td>
                                    <td>{appointments.slot}</td>
                                    <td>{appointments.treatment}</td>
                                    <td>{(appointments.price && !appointments.paid) && <Link to={`/dashboard/payment/${appointments._id}`}><button className='btn btn-xs-success' type='button'>Pay</button></Link>}</td>
                                    <td>{(appointments.price && appointments.paid) && <div>
                                        <p className='text-success' type='button'>Paid</p>
                                        <p className='text-success' type='button'>Transaction Id: {appointments.transectionId}</p>
                                    </div>}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppoinment;