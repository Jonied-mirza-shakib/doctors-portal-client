import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
            <InfoCart className='bg-primary' cartTitle='Opening Hours' img={clock}></InfoCart>
            <InfoCart className='bg-accent' cartTitle='Our Location' img={marker}></InfoCart>
            <InfoCart className='bg-neutral' cartTitle='Contact Us' img={phone}></InfoCart>
        </div>
    );
};

export default Info;