import React from 'react';

const Testimonial = ({ Istestimonials }) => {
    return (
        <div className="card card-compact lg:mx-w-lg bg-base-100 shadow-xl py-5">
            <div className="card-body">
                <p className='capitalize mb-5'>{Istestimonials.description}</p>
                <div className="card-actions flex items-center">
                    <div>
                        <figure><img src={Istestimonials.img} /></figure>
                    </div>
                    <div>
                        <h4 className='text-slate-900 font-bold'>{Istestimonials.name}</h4>
                        <p className='text-slate-900'>{Istestimonials.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;