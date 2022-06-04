import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddReview = () => {
    const [rating , setRating]= useState(null)
    const [user] = useAuthState(auth)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('https://guarded-cliffs-74230.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast('Your Review is successfully post')
                    reset()
                }
            })
    };

    return (
        <div className=' w-3/4 mx-auto p-4 mt-6'>
            <div className='w-full mx-auto border border-slate-400 rounded-2xl p-4'>
            <h2 className='text-3xl font-bold text-secondary text-center my-3'>Add Ratings & Reviews</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="label">
                        <span className="label-text text-xl">Your Name</span>
                    </label>
                    <input type="text" className="input input-bordered w-full mb-3" readOnly value={user.displayName} {...register("name")} />
                    <label className="label">
                        <span className="label-text text-xl">Your Review</span>
                    </label>
                    <textarea cols="0" rows="10" placeholder='Your Review' required className="input input-bordered w-full" {...register("description")}></textarea>
                    
                    <div>
                    <label className="label">
                        <span className="label-text text-accent text-xl">Your Rating</span>
                    </label>
                        {[...Array(5)].map((star, index,i) => {
                            const ratingValue = i + 1
                            return <label>
                                <input {...register("rating")} className='hidden' type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} />
                                <FontAwesomeIcon key={index} className='text-xl' color={ratingValue <= rating ? '#FACA51' : '#ffffff'} icon={faStar} />
                            </label>
                        })}
                    </div>


                    <input className='btn btn-secondary w-full my-4' type="submit" value='submit' />
                </form>
            </div>
        </div>
    );
};

export default AddReview;