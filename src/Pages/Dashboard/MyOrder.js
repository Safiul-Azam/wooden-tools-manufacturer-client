import React from 'react';

const MyOrder = ({myOrder,index}) => {
    const {name,email, productName,description ,perPrice, quantity, totalPrice} = myOrder
    return (
            <tr>
                <th>{index + 1}</th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{productName}</td>
                <td>{quantity} <span className='text-xs text-secondary'>Pic</span></td>
                <td>${perPrice}<span className='text-xs text-secondary'> per</span></td>
                <td>${totalPrice}</td>
                <td><button className='btn btn-xs btn-success text-white text-xs'>Pay</button></td>
            </tr>
    );
};

export default MyOrder;