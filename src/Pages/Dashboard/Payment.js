import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`
    const { data: order, isLoading } = useQuery('booking', () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    console.log(order)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h3>payment</h3>
        </div>
    );
};

export default Payment;