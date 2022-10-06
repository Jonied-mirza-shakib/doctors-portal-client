import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DoctorRow from '../../Pages/Dashboard/DoctorRow'
import DeleteConfirmModal from '../../Pages/Dashboard/DeleteConfirmModal'

const ManagDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery(['doctor'], () => fetch('https://doctors-portal-server-a4jz.onrender.com/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        return res.json()
    }));

    if (isLoading) {
        return <button type="button" className="text-xl font-bold" disabled>
            Loading....
        </button>
    }

    return (
        <div>
            <h2 className="text-2xl text-accent text-center my-10">Manage Doctors</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors?.map((doctor, index) => <DoctorRow
                                key={doctor._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctor={setDeletingDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {deletingDoctor && <DeleteConfirmModal
                deletingDoctor={deletingDoctor}
                setDeletingDoctor={setDeletingDoctor}
                refetch={refetch}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManagDoctors;