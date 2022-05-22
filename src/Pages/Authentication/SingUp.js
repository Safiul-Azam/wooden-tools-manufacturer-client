import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { toast } from 'react-toastify';
import SocialLogin from './SocialLogin';
import { sendEmailVerification } from 'firebase/auth';

const SingUp = () => {
    const navigate = useNavigate()
    const location =useLocation()
    const from = location?.state?.from?.pathname || '/'
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth ,{sendEmailVerification:true});
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      let errorMessage;
      if(error || updateError){
          errorMessage = <p className='text-error text-sm mb-4'>{error.message || updateError.message}</p>
      }
      if(user){
         navigate('/home')
      }
      if(loading || updating){
          return <Loading></Loading>
      }
    const onSubmit = async data => {
        const displayName = data.name
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName});
        if(sendEmailVerification){
            toast('Registration Completed');
            navigate(from, { replace: true })
        }else{
            toast('Your email is not valid')
        }
        console.log(data)};
    return (
        <div className='lg:w-1/3 md:w-1/2 w-full mx-auto border p-10 shadow-xl my-14'>
            <h2 className="text-2xl text-secondary font-bold text-center mb-4">Sign UP</h2>
            <form className='' onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full">
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <input
                        {...register('name', {
                            required: {
                                value: true,
                                message: 'name is required'
                            }
                        })}
                        type="text" placeholder="Your Name"
                        class="input input-bordered w-full"

                    />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-error">{errors.name.message}</span>}
                    </label>
                </div>
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
                            minLength:{
                                value:6,
                                message:'the password must be at least 6 characters long'
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
                <input className='w-full btn btn-secondary text-white' type="submit" value='signup' />
            <p className='mt-6 text-sm'>Already have an account? <Link className='text-primary' to='/login'>please Login</Link></p>
            </form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SingUp;