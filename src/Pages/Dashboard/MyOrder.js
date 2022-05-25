import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const MyOrder = ({ myOrder, index, setDeletingOrder }) => {
    const { _id, name, email, productName, perPrice, quantity, totalPrice } = myOrder
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{productName}</td>
            <td>{quantity} <span className='text-xs text-secondary'>Pic</span></td>
            <td>${perPrice}<span className='text-xs text-secondary'>/per</span></td>
            <td>${totalPrice}</td>
            <td>
                <Link to={`/dashboard/payment/${_id}`}><button className='btn btn-xs btn-success text-white text-xs'>Pay</button></Link>
            </td>
            <td>
                <label onClick={() => setDeletingOrder(myOrder)} htmlFor="delete-product-modal" className='text-red-500 text-xl'><FontAwesomeIcon icon={faTrash} /></label>
            </td>
        </tr>
    );
};

export default MyOrder;