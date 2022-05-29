import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Review = ({review}) => {
    const {name, description,rating} = review
    return (
        <div className="card border-t-2 bg-base-100 shadow-xl">
            <div className="card-body text-center ">
                <h2 className="text-2xl my-8">{name}</h2>
                <p className='text-sm tracking-normal'>{description}</p>
                <div className=''>
                    <p className='text-lg inline'>Rating {rating || 0} </p>
                        {[...Array(rating)].map((star,i,index) => {
                            
                            return <FontAwesomeIcon key={index} className='text-xl' color={rating ? '#FACA51' : '#EFF0F5'} icon={faStar} />
                        })}
                    </div>
                    
            </div>
        </div>
    );
};

export default Review;