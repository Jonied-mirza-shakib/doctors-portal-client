import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AllUsers = () => {
    const { data: user, isLoading, refetch } = useQuery(['users'], () =>
        fetch('http://localhost:5000/user', {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
    )


    const makeAdmin = email => {
        console.log(email);
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Field to made an admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin')
                }
            })
    }



    if (isLoading) {
        return <button type="button" class="text-xl font-bold" disabled>
            Loading....
        </button>
    }
    return (
        <div>
            <h1 className='text-center text-2xl text-accent'>All Users</h1>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user?.map((users, index) =>
                                <tr>
                                    <th>{index + 1}</th>
                                    <td>{users.email}</td>
                                    <td>{users.role !== 'admin' && <button onClick={() => makeAdmin(users.email)} className='btn btn-xs' type='button'>Make A Admin</button>}</td>
                                    <td><button className='btn btn-xs' type='button'>Remove User</button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;