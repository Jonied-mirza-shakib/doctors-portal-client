import React from 'react';
import Banner from './Banner';
import ContactUs from './ContactUs';
import DentalCare from './DentalCare';
import Info from './Info';
import MakeAnAppointment from './MakeAnAppointment';
import ServiceInfo from './ServiceInfo'
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <ServiceInfo></ServiceInfo>
            <DentalCare></DentalCare>
            <MakeAnAppointment></MakeAnAppointment>
            <Testimonials></Testimonials>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;