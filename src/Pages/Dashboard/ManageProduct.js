import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const ManageProduct = ({ handTool, refetch }) => {
    const { img, productName, perPrice, minQuantity, maxQuantity,_id } = handTool
    const handleDeleteProduct = () => {
        fetch(`http://localhost:5000/handTools/${_id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success('Delete successfully')
                refetch()
            }
            console.log(data)
        })
    }
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
            <td><button onClick={handleDeleteProduct} className='text-red-500 text-xl'><FontAwesomeIcon icon={faTrash} /></button></td>
        </tr>
    );
};

export default ManageProduct;