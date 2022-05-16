import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BokingModal from './BokingModal';
import Service from './Service';
import { useQuery } from 'react-query'

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'pp')

    const { data: service, isLoading, refetch } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <button type="button" class="text-xl font-bold" disabled>
            Loading....
        </button>
    }

    return (
        <div>
            <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    service?.map(services => <Service key={services._id} services={services}
                        setTreatment={setTreatment}
                    ></Service>)
                }
                {treatment && <BokingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BokingModal>}
            </div>
        </div>
    );
};

export default AvailableAppointment;