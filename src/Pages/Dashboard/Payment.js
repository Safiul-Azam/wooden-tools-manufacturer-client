import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const Payment = () => {
    const {id}= useParams()
    const [user]= useAuthState(auth)


    const {data,isLoading} = useQuery(['order',id],()=>fetch(`http://localhost:5000/order/${id}`,{
        method:'GET',
        headers:{authorization: `Bearer ${localStorage.getItem('accessToken')}`}
    }).then(res => res.json()))


    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2> Payment method{data.productName}</h2>
        </div>
    );
};

export default Payment;