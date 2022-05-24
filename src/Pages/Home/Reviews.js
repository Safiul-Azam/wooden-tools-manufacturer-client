import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading'
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch('http://localhost:5000/review').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto mb-20'>
            <h2 className="text-2xl mb-4 text-secondary text-center font-bold">CLIENT REVIEW</h2>
            <div className='grid grid-cols-3 gap-20'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;