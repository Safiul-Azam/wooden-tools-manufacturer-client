import React from 'react';
import { toast } from 'react-toastify';

const DeleteOrderModal = ({deletingOrder,setDeletingOrder,refetch}) => {
    const {productName,_id }= deletingOrder
    console.log(deletingOrder)
    const handleCancel = ()=>{
        fetch(`https://guarded-cliffs-74230.herokuapp.com/order/${_id}`,{
            method:'DELETE',
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data)
            if (data.deletedCount) {
                setDeletingOrder(null)
                toast.success('Cancel successfully')
                refetch()
            }
        })
     }
    return (
        <div>
            <input type="checkbox" id="delete-product-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="text-md text-warning">Are you sure delete the <span className='text-xl'>{productName}</span> from database and ui both!!!</h3>
                    <p className="py-4 text-error">You won't find it anywhere!</p>
                    <div className="modal-action">
                    <button className='btn btn-sm btn-error text-white' onClick={handleCancel}>Confirm Delete</button>
                        <label for="delete-product-modal" className="btn btn-sm btn-secondary">Cancel</label>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default DeleteOrderModal;