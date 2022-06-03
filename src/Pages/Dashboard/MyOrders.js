import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import DeleteOrderModal from './DeleteOrderModal';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const [deletingOrder, setDeletingOrder] = useState(null)
    const [user] = useAuthState(auth)
    const email = user.email
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/login'
    const url = `http://localhost:5000/order/${email}`
    const { data: myOrders, isLoading, refetch } = useQuery(['order', email], () => fetch(url, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if (res.status === 401 || res.status === 403) {
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate(from)
        }
        return res.json()
    }))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className="overflow-x-auto w-full p-5 mx-auto">
                <h2 className='text-3xl font-bold text-secondary text-center'>MY ORDERS</h2>
                <table className="table table-compact mx-auto mt-8 border">
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
                            <th>Cancel</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myOrders?.map((myOrder, index) => <MyOrder

                                key={myOrder._id}
                                index={index}
                                myOrder={myOrder}
                                setDeletingOrder={setDeletingOrder}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingOrder && <DeleteOrderModal
                deletingOrder={deletingOrder}
                refetch={refetch}
                setDeletingOrder={setDeletingOrder}
                ></DeleteOrderModal>
            }
        </div>
    );
};

export default MyOrders;