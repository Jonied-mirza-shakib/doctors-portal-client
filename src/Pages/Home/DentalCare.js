import React from 'react';
import treatment from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
        <div className="hero min-h-screen py-20">
            <div className="hero-content flex-col lg:flex-row">
                <img src={treatment} className="max-w-md rounded-lg shadow-2xl" />
                <div className='pl-20'>
                    <h4 className="sm:text-3xl md:text-4xl lg:text-5xl sm:mt-10 font-bold text-center text-gray-600">Exceptional Dental Care, <br />  on Your Terms</h4>
                    <p className="py-6 tex-center text-gray-600 font-bold">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default DentalCare;