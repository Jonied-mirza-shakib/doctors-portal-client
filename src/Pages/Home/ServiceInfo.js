import React from 'react';
import ServiceCart from './ServiceCart'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'
import cavity from '../../assets/images/cavity.png'

const ServiceInfo = () => {
    const serviceDetails = [
        {
            _id: 1,
            name: 'Florida Treatment',
            img: fluoride
        },
        {
            _id: 2,
            name: 'Cavity Filing',
            img: cavity
        },
        {
            _id: 3,
            name: 'Teeth Whitening',
            img: whitening
        }
    ]
    return (
        <div>
            <div className='py-20'>
                <h3 className='text-center text-2xl mb-6 font-mono font-bold text-indigo-900'>Our Service</h3>
                <h2 className='text-center text-4xl font-serif text-indigo-900'>Service We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    serviceDetails.map(services => <ServiceCart key={services._id} services={services}></ServiceCart>)
                }
            </div>
        </div>
    );
};

export default ServiceInfo;