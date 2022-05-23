import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const email = user.email
    const url = `http://localhost:5000/order/${email}`
    const { data: myOrders, isLoading } = useQuery(['order', email], () => fetch(url).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
            <h2 className='text-3xl font-bold text-secondary text-center mt-16'>My Order</h2>
            <table class="table w-2/3 mx-auto mt-8 border">
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