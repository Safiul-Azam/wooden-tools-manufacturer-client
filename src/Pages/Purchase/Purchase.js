import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import OrderModal from './OrderModal';

const Purchase = () => {
    const [order, setOrder] = useState(null)
    const { purchaseId } = useParams()
    const url = `http://localhost:5000/handTools/${purchaseId}`
    const { data:handTool, isLoading } = useQuery(['tools', purchaseId], () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto grid grid-cols-3 mt-24 gap-8'>
            <div>
                <img src={handTool.img} alt="" />
            </div>
            <div>
                <h3 className='text-1xl text-secondary font-semibold mb-4'>Factory directly sales <span className='text-primary text-2xl'>{handTool.name}</span> to you</h3>
                <h4 className='text-4xl text-primary mb-4'>Price: ${handTool.price}/<span className='text-lg text-secondary'>Per piece</span></h4>
                <hr className='mb-4' />
                <p className='text-xl'>Quantity Pieces: {handTool.minQuantity}-{handTool.maxQuantity}</p>
                <hr className='mt-4' />
            </div>
            <div>
                <h4>{handTool.description}</h4>
                <label 
                htmlFor="order-modal" 
                className='btn btn-Primary rounded-none'
                onClick={()=>setOrder(handTool)}>
                   Add to Card
                </label>
            </div>
            {
                order && <OrderModal
                 handTool={handTool}
                 setOrder={setOrder}
                 ></OrderModal>
            }
        </div>
    );
};

export default Purchase;
            // <div className='text-center mt-8'>
            //     <button className='btn-xs btn rounded-r-none'><FontAwesomeIcon icon={faMinus} /></button>
            //     <input ref={inputRef} className='border' name='quantity' type="number" />
            //     <button onClick={handlePlus} className='btn-xs btn rounded-l-none'><FontAwesomeIcon icon={faPlus} /></button>
            // </div>
            // <form >
                
            // </form>
            // <h3>total price:{quantity}</h3>