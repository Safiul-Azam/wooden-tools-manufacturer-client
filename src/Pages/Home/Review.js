import React from 'react';

const Review = ({review}) => {
    const {name, description}=review
    return (
        <div className="card border-t-2 bg-base-100 shadow-xl">
            <div className="card-body text-center ">
                <h2 className="text-2xl my-8">{name}</h2>
                <p className='text-sm tracking-normal'>{description}</p>
            </div>
        </div>
    );
};

export default Review;