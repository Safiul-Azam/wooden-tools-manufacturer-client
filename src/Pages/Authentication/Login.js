import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const navigate = useNavigate()
    const emailRef = useRef('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, sendError] = useSendPasswordResetEmail(
        auth
    );
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-error text-sm mb-4'>{error.message}</p>
    }

    if (user) {
        navigate('/home')
    }
    if (loading) {
        return <Loading></Loading>
    }
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)
    };
    const resetPassword = () => {
        console.log('it is clicked')
    }
    return (
        <div className='lg:w-1/3 md:w-1/2 w-full mx-auto border p-10 shadow-xl my-16'>
            <div>
                <h2 className="text-2xl text-secondary font-bold text-center mb-4">Login</h2>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <input
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Provide a valid email'
                                }
                            })}
                            ref={emailRef}
                            type="email" placeholder="Enter Your Email"
                            class="input input-bordered w-full"

                        />
                        <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-error">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-error">{errors.email.message}</span>}
                        </label>
                    </div>
                    <div class="form-control w-full ">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <input
                            {...register('password', {
                                required: {
                                    value: true,
                                    message: 'password is required'
                                },
                                minLength: {
                                    value: 6,
                                    message: 'the password must be at least 6 characters long'
                                }
                            })}
                            type="password" placeholder="Enter Your Password"
                            class="input input-bordered w-full"

                        />
                        <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-error">{errors.password.message}</span>}
                            {errors.password?.type === 'pattern' && <span class="label-text-alt text-error">{errors.password.message}</span>}
                        </label>
                    </div>
                    {errorMessage}
                    <input className='w-full btn btn-secondary text-white' type="submit" value='Login' />
                    <p className='text-sm mt-6'>New to Wooden tools? <Link className='text-primary' to='/signup'>Create new account</Link></p>
                </form>
            </div>
            <SocialLogin></SocialLogin>
        </div>
    );
};


export default Login;