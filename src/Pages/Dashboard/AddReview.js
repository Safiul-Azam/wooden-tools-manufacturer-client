import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        fetch('https://guarded-cliffs-74230.herokuapp.com/review',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                console.log(inserted)
                toast('Your Review is successfully post')
                reset()
            }
        })
    };

    return (
        <div className=' w-1/2 mx-auto border p-4 mt-6'>
            <h2 className='text-3xl font-bold text-secondary text-center my-3'>ADD A REVIEW</h2>
            <div className='w-full mx-auto border p-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text">Your Name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full mb-3" readOnly value={user.displayName} {...register("name")} />
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea cols="0" rows="10" placeholder='Your Review'required className="input input-bordered w-full" {...register("description")}></textarea>
                    <input className='btn btn-secondary w-full my-4' type="submit" value='submit' />
                </form>
            </div>
        </div>
    );
};

export default AddReview;