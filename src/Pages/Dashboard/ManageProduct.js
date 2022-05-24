import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ManageProduct = ({ handTool, index, refetch }) => {

    const {img, productName, perPrice, minimum_quantity, available_quantity } = handTool
    return (
        <tr>
            <th><div class="avatar">
                <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} alt="" />
                </div>
            </div></th>
            <td>{productName}</td>
            <td>{minimum_quantity} <span className='text-xs text-secondary'>Pic</span></td>
            <td>{available_quantity} <span className='text-xs text-secondary'>Pic</span></td>
            <td>${perPrice}<span className='text-xs text-secondary'>/per</span></td>
            <td><button className='text-orange-500 text-xl'><FontAwesomeIcon icon={faPenToSquare} /></button></td>
            <td><button className='text-red-500 text-xl'><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
    );
};

export default ManageProduct;