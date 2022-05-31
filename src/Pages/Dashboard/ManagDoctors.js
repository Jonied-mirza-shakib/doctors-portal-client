import React, { useState } from 'react';
import { useQuery } from 'react-query';
import DoctorRow from '../../Pages/Dashboard/DoctorRow'
import DeleteConfirmModal from '../../Pages/Dashboard/DeleteConfirmModal'

const ManagDoctors = () => {
    const [deletingDoctor, setDeletingDoctor] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery(['doctor'], () => fetch('https://cryptic-mesa-43832.herokuapp.com/doctors', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        console.log(res)
        return res.json()
    }));
    console.log()

    if (isLoading) {
        return <button type="button" class="text-xl font-bold" disabled>
            Loading....
        </button>
    }

    return (
        <div>
            <h2 className="text-2xl">Manage Doctors{doctors?.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
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