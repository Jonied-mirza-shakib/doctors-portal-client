import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BokingModal from './BokingModal';
import Service from './Service';

const AvailableAppointment = ({ date }) => {
    const [service, setService] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    service.map(services => <Service key={services._id} services={services}
                        setTreatment={setTreatment}
                    ></Service>)
                }
                {treatment && <BokingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                ></BokingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointment;