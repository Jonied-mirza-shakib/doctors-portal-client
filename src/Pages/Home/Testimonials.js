import React from 'react';
import testimonialImg1 from '../../assets/images/people1.png'
import testimonialImg2 from '../../assets/images/people2.png'
import testimonialImg3 from '../../assets/images/people3.png'
import quote from '../../assets/icons/quote.svg'
import Testimonial from './Testimonial';

const Testimonials = () => {
    const testimonial = [
        {
            _id: 1,
            name: 'Winson Herry',
            location: 'California',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: testimonialImg1
        },
        {
            _id: 2,
            name: 'Jinuk',
            location: 'Indonesia',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: testimonialImg2
        },
        {
            _id: 3,
            name: 'Rinuk',
            location: 'America',
            description: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: testimonialImg3
        },
    ]
    return (
        <div className='px-12 my-20'>
            <div className='flex justify-between mb-20'>
                <div>
                    <p className='text-primary font-semibold mb-5'>Testimonial</p>
                    <h2 className='text-accent font-bold text-4xl'>What Our Patients Says</h2>
                </div>
                <div>
                    <img className='w-20' src={quote} alt="" />
                </div>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    testimonial.map(Istestimonials => <Testimonial key={Istestimonials._id} Istestimonials={Istestimonials}></Testimonial>)
                }
            </div>
        </div>
    );
};

export default Testimonials;