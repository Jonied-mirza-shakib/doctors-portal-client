import React from 'react';
import appoinmentImg from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'

const MakeAnAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center my-16' >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={appoinmentImg} alt="" />
            </div>
            <div className='flex-1 text-white sm:text-center md:text-center lg:text-left'>
                <p className='mb-5 font-bold'>Appointment</p>
                <h2 className='mb-7 font-bold text-xl'>Make an appointment Today</h2>
                <p className='mb-10'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className='btn btn-primary text-white'>Get Started</button>
            </div>
        </section >
    );
};

export default MakeAnAppointment;