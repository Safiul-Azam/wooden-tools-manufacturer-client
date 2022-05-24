import React from 'react';

const Review = ({review}) => {
    const {name, description}=review
    return (
        <div class="card  bg-base-100 shadow-xl">
            <div class="card-body text-center ">
                <h2 class="text-2xl">{name}</h2>
                <p className='text-sm tracking-normal'>{description}</p>
            </div>
        </div>
    );
};

export default Review;