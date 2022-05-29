import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllSingleOrder from './AllSingleOrder';

const AllOrders = () => {
    const {data:allOrders, isLoading} = useQuery('orders',()=>fetch('http://localhost:5000/order',{
        method:'GET',
        headers:{
            authorization : `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res =>res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
              <h2 className='text-3xl font-bold text-secondary text-center mt-8'>ALL ORDERS {allOrders.length}</h2>
              <div className="overflow-x-auto">
            <table className="table table-compact w-2/3 mx-auto my-8 border">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Per piece</th>
                        <th>Total price</th>
                        <th>Shipping</th>
                    </tr>
                </thead>
                <tbody>
                    {
                       allOrders.map((singleOrder,index)=> <AllSingleOrder
                       key={singleOrder._id}
                       index={index}
                       singleOrder={singleOrder}
                       ></AllSingleOrder>)
                    }
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default AllOrders;
