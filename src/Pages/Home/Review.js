import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useProfile from '../../hooks/useProfile';
import userPic from '../../images/user/user-1.png'

const Review = ({ review }) => {
    const [user] = useAuthState(auth)
    const [profile] = useProfile(user)
    const { name, description, rating } = review
    const ratingToNumber = parseInt(rating)
    return (
        <div className="card border-t-2 bg-base-100 shadow-md hover:shadow-2xl ease-in duration-300">
            <div className="card-body text-center ">
                <div class="avatar mx-auto">
                    <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={(profile.displayName === name) ? profile.img : userPic} alt='profile-pic' />
                    </div>
                </div>
                <h2 className="text-2xl my-2">{name}</h2>
                <p className='text-sm tracking-normal'>{description}</p>
                <div className=''>
                    {[...Array(ratingToNumber)].map((star, i) => {
                        return <FontAwesomeIcon className='text-sm' color={rating ? '#FACA51' : '#EFF0F5'} icon={faStar} />
                    })}
                </div>

            </div>
        </div>
    );
};

export default Review;