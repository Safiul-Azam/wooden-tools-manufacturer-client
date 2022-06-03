import { faCamera, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import userPic from '../../images/user/user-3.png'

const EditProfile = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'PUT',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.result.modifiedCount) {
                    reset()
                    toast('update Your Profile')

                }
            })
    }
    return (
        <div className='w-3/4 mx-auto border p-5'>
            <div className='flex justify-between border-slate-300 border-b-2 mb-4'>
                <h3 className="text-4xl text-secondary font-bold">Update Your Profile</h3>
                <Link to='/dashboard/myProfile'>
                    <button className='text-red-500 text-4xl mb-4' >X</button>
                </Link>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className=' w-40 mx-auto relative mb-4 border-8 rounded-full'>
                    <img src={userPic} alt="userPic" />
                    <div className='absolute bottom-0 bg-slate-300 right-0 w-8 h-8 pr-2 flex text-center items-center'>
                        <input
                            {...register("image")}
                            type="file" src={userPic} readOnly
                            className="
                            file:bg-gradient-to-r file:from-cyan-500 file:to-blue-500
                            file:w-full opacity-0 file:absolute file:cursor-pointer
                            " />
                        <FontAwesomeIcon className=' text-slate-500' icon={faCamera} />
                    </div>

                </div>
                <input
                    {...register("displayName")}
                    type="text" value={user.displayName || ''} readOnly className="input input-bordered w-full mb-3" />
                <input
                    {...register("email")}
                    type="email" value={user.email || ''} readOnly className="input input-bordered w-full mb-3" />
                <input
                    required
                    {...register("phone")}
                    type="text" placeholder='phone' className="input input-bordered w-full mb-3" />
                <div className='w-full grid grid-cols-3 gap-3 '>
                    <input
                        {...register("city")}
                        type="text"
                        required
                        placeholder='City'
                        className="input input-bordered mb-3" />
                    <input
                        {...register("streetAddress")}
                        type="text"
                        placeholder='Street Address'
                        className="input input-bordered mb-3" />
                    <input
                        {...register("district")}
                        type="text"
                        required
                        placeholder='District'
                        className="input input-bordered  mb-3" />
                </div>
                <input
                    {...register("facebook")}
                    type="text" placeholder="Facebook Link" className="input input-bordered w-full mb-3" />
                <input
                    {...register("linkedin")}
                    type="text" placeholder="Linkedin Link" className="input input-bordered w-full mb-3" />
                <input className='btn btn-secondary w-full' type="submit" value='Update' />
            </form>
        </div>
    );
};

export default EditProfile;