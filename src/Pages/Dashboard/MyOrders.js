import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/login'
    const url = `https://guarded-cliffs-74230.herokuapp.com/order/${email}`
    const { data: myOrders, isLoading } = useQuery(['order', email], () => fetch(url,{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if(res.status === 401 || res.status === 403){
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate(from)
        }
       return res.json()}))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
            <h2 className='text-3xl font-bold text-secondary text-center mt-8'>MY ORDERS</h2>
            <table className="table table-compact w-2/3 mx-auto mt-8 border">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Per piece</th>
                        <th>Total price</th>
                        <th>Pay</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       myOrders.map((myOrder,index)=> <MyOrder
                       key={myOrder._id}
                       index={index}
                       myOrder={myOrder}
                       ></MyOrder>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;