import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

const AddDoctors = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const { data: services, isLoading } = useQuery(['services'], () =>
        fetch('https://doctors-portal-server-a4jz.onrender.com/service')
            .then(res => res.json())
    )

    if (isLoading) {
        return <button type="button" className="text-xl font-bold" disabled>
            Loading....
        </button>
    }

    const imageStorageApi = '19bf4cd9f8fbd132a1a0e00b0808ce6a';

    const onSubmit = async data => {
        console.log(data)
        console.log(data.Specialty)
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageApi}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                const img = result.data.url;
                if (result.success) {
                    const doctors = {
                        name: data.name,
                        email: data.email,
                        specialty: data.Specialty,
                        img: img,
                    }
                    fetch('https://doctors-portal-server-a4jz.onrender.com/doctors', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            authorization: `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctors),
                    })
                        .then(response => response.json())
                        .then(result => {
                            if (result.insertedId) {
                                toast.success('Added doctor successfully');
                                reset()
                            } else {
                                toast.error('Field to added doctor')
                            }
                        })
                }
            })
    };
    return (
        <div>
            <h1 className='text-4xl text-center mt-5 text-purple-800'>Add A Doctors</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Name</span>
                    </label>
                    <input
                        type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs"
                        {...register("name", {
                            required: {
                                value: true,
                                message: 'Name is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Email</span>
                    </label>
                    <input
                        type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs"
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is Required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email'
                            }
                        })} />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Specialty</span>
                    </label>
                    <select {...register("Specialty")} input-bordere className="select w-full max-w-xs">
                        {
                            services.map(service =>
                                <option
                                    key={service._id}
                                    value={service.name}
                                >{service.name}</option>
                            )
                        }
                    </select>
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-bold">Photo</span>
                    </label>
                    <input
                        type="file" className="input input-bordered w-full max-w-xs"
                        {...register("image", {
                            required: {
                                value: true,
                                message: 'image is Required'
                            }
                        })} />
                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <input className='btn w-full max-w-xs text-white' type="submit" value='ADD' />
            </form>
        </div>
    );
};

export default AddDoctors;