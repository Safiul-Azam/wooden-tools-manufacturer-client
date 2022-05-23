import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

    };

    return (
        <div className=' w-1/2 mx-auto border p-4 mt-6'>
            <h2 className='text-3xl font-bold text-secondary text-center my-3'>ADD A REVIEW</h2>
            <div className='w-full mx-auto border p-4'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label class="label">
                        <span class="label-text">Your Name</span>
                    </label>
                    <input type="text" class="input input-bordered w-full mb-3" readOnly value={user.displayName} {...register("name")} />
                    <label class="label">
                        <span class="label-text">Your Review</span>
                    </label>
                    <textarea cols="0" rows="10" placeholder='Your Review' class="input input-bordered w-full" {...register("description")}></textarea>
                    <input className='btn btn-secondary w-full my-4' type="submit" value='submit' />
                </form>
            </div>
        </div>
    );
};

export default AddReview;