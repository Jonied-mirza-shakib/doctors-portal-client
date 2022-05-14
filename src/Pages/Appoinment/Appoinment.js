import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import appoinmentBg from '../../assets/images/chair.png'
import AvailableAppointment from './AvailableAppointment';

const Appoinment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <section className='grid lg:grid-cols-2 py-20'>
                <div>
                    <DayPicker
                        mode="single"
                        date={date}
                        onSelect={setDate}
                    />;
                </div>
                <div>
                    <img src={appoinmentBg} alt="" />
                </div>
            </section>
            <AvailableAppointment date={date}></AvailableAppointment>
        </div>
    );
};

export default Appoinment;