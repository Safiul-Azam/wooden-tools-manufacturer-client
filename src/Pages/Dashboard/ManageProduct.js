import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageProduct = ({ handTool, refetch, setProductDeleting }) => {
    const { img, productName, perPrice, minQuantity, maxQuantity } = handTool
    return (
        <tr>
            <th><div className="avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt="" />
                </div>
            </div></th>
            <td>{productName}</td>
            <td>{minQuantity} <span className='text-xs text-secondary'>Pic</span></td>
            <td>{maxQuantity} <span className='text-xs text-secondary'>Pic</span></td>
            <td>${perPrice}<span className='text-xs text-secondary'>/per</span></td>
            <td><button className='text-orange-500 text-xl'><FontAwesomeIcon icon={faPenToSquare} /></button></td>
            <td>
                <label onClick={() => setProductDeleting(handTool)} htmlFor="delete-product-modal" className='text-red-500 text-xl'><FontAwesomeIcon icon={faTrash} /></label>
            </td>
        </tr>
    );
};

export default ManageProduct;