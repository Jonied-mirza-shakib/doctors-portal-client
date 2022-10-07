import React from 'react';
import { useSignInWithGoogle, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
import './Login.css'


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, GoogleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [token] = useToken(user || GoogleUser);


    let errorMessage;
    if (googleLoading || loading) {
        return <button type="button" className="text-indigo-500 font-bold flex justify-center items-center mx-auto" disabled>
            Loading...
        </button>
    }
    if (googleError || error) {
        errorMessage = <p className='text-red-500'>{googleError?.message || error?.message}</p>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    const onSubmit = data => {
        console.log(data)
        signInWithEmailAndPassword(data?.email, data?.password)
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-3xl font-bold uppercase">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" {...register("email", {
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
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input
                                type="password" placeholder="Your Password" {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input type="submit" value='Login' />
                    </form>
                    <p><small>New To Doctors Portal? <Link to='/signUp' className='text-primary'>Creat An New Account</Link> </small></p>
                    <div className="divider">OR</div>
                    <div className="card-actions justify-end">
                        <button
                            onClick={() => signInWithGoogle()}
                            className="btn btn-outline btn-accent font-bold w-full max-w-xs text-white">Continue With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login