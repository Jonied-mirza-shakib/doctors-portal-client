import React from 'react';
import formBg from '../../assets/images/appointment.png'

const ContactUs = () => {
    return (
        <div style={{ background: `url(${formBg})` }} className='flex flex-col justify-center items-center my-20 pb-10'>
            <div className='my-10 text-white'>
                <h5 className='font-bold text-center'>Contact Us</h5>
                <h2 className='text-4xl'>Stay connected with us</h2>
            </div>
            <div>
                <form action="#" method="post">
                    <input className='w-full p-2 rounded-lg border-solid border-2 border-indigo-600 mb-3' type="email" name="email" placeholder='Enter Your Email' />
                    <br />
                    <input className='w-full p-2 rounded-lg border-solid border-2 border-indigo-600 mb-3' type="text" name="text" placeholder='Subject' />
                    <br />
                    <textarea name="message p-2 rounded-lg border-solid border-2 border-indigo-600 mb-3" cols="70" rows="10" placeholder='Enter Your Message'></textarea>
                    <br />
                    <div className='flex justify-center'>
                        <input type="submit" value="Submit" className='btn btn-primary text-white w-full text-xl' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;