import React from 'react';

const AllSingleOrder = ({singleOrder,index}) => {
    const {name,email, productName ,perPrice, quantity, totalPrice} = singleOrder
    return (
        <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{productName}</td>
                <td>{quantity} <span className='text-xs text-secondary'>Pic</span></td>
                <td>${perPrice}<span className='text-xs text-secondary'>/per</span></td>
                <td>${totalPrice}</td>
                <td><button className='btn btn-xs btn-success text-white text-xs'>Shipping</button></td>
            </tr>
    );
};

export default AllSingleOrder;