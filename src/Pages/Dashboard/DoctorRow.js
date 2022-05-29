import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index, refetch, setDeletingDoctor }) => {
    console.log(doctor)
    const { name, specialty, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeletingDoctor(doctor)} for="my-modal-6" class="btn btn-xs btn-error">Delete</label>
            </td>
        </tr>
    );
};
export default DoctorRow;