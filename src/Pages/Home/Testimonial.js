import React from 'react';

const Testimonial = ({ testimonials }) => {
    console.log(testimonials)
    return (
        <div className="card card-compact lg:mx-w-lg bg-base-100 shadow-xl py-5">
            <div className="card-body">
                <p className='capitalize mb-5'>{testimonials.description}</p>
                <div className="card-actions flex items-center">
                    <div>
                        <figure><img src={testimonials?.img} /></figure>
                    </div>
                    <div>
                        <h4 className='text-slate-900 font-bold'>{testimonials.name}</h4>
                        <p className='text-slate-900'>{testimonials.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;