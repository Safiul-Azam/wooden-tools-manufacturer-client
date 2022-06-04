import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L1lwNK8cblwyB4icoDXqCV5LRsqz0BUpH0hPggBa0b10LucJ4r91UIcNBp0DBWqe94yOFFslBJmqMDKdZNesRZ400Ewz7t6jX');
const Payment = () => {
    const { id } = useParams()
    const { data: order, isLoading } = useQuery(['order', id], () => fetch(`https://guarded-cliffs-74230.herokuapp.com/orders/order/${id}`, {
        method: 'GET',
        headers: { authorization: `Bearer ${localStorage.getItem('accessToken')}` }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=" min-h-screen bg-base-200">
            <div className="w-1/2 mx-auto mt-16">
                <div className="card w-full shadow-sm bg-base-100 mb-8">
                    <div className="card-body">
                        <h2 className=" text-pink-500 text-2xl font-semibold">Hello {order.name}</h2>
                        <h2 className='text-lg font-semibold text-orange-500'>Order Id: #{order._id}</h2>
                        <h2 className='text-lg font-semibold text-orange-500'>Order Email: {order.email}</h2>
                        <h3 className='text-2xl font-bold text-secondary'>Product: {order.productName}</h3>
                        <h2 className='text-xl font-bold text-secondary'>Per Price: ${order.perPrice}</h2>
                        <h2 className='text-xl font-bold text-secondary'>Quantity:     {order.quantity} pieces</h2>
                        <h2 className='text-xl font-bold text-secondary'>Total Price: ${order.totalPrice}</h2>
                    </div>
                </div>
                <div className="card w-full shadow-sm bg-base-100">
                    <div className="card-body">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm order={order} />
                        </Elements>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;