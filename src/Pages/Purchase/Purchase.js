import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const Purchase = () => {
    const [quantity, setQuantity] = useState(1)
    const inputRef = useRef(0)
    const { purchaseId } = useParams()
    const url = `http://localhost:5000/handTools/${purchaseId}`
    const { data:handTools, isLoading } = useQuery(['tools', purchaseId], () => fetch(url).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const handlePlus = e =>{
        console.log('it is a book')
        const number = inputRef.current.value
        const increase = parseInt(number) + 1
        console.log(increase)
    }
    return (
        <div className='container mx-auto grid grid-cols-3 mt-24 gap-8'>
            <div>
                <img src={handTools.img} alt="" />
            </div>
            <div>
                <h3 className='text-1xl text-secondary font-semibold mb-4'>Factory directly sales <span className='text-primary text-2xl'>{handTools.name}</span> to you</h3>
                <h4 className='text-4xl text-primary'>Price: ${handTools.price}/<span className='text-lg text-secondary'>Per piece</span></h4>
                <hr className='mb-4' />
                <p className='text-xl'>Quantity Pieces: {handTools.minimum_quantity}-{handTools.available_quantity}</p>
                <hr className='mt-4' />
                <div className='text-center mt-8'>
                    <button className='btn-xs btn rounded-r-none'><FontAwesomeIcon icon={faMinus} /></button>
                    <input ref={inputRef} className='border' name='quantity' type="number" />
                    <button onClick={handlePlus} className='btn-xs btn rounded-l-none'><FontAwesomeIcon icon={faPlus} /></button>
                </div>
                <form >
                    
                </form>
                <h3>total price:{quantity}</h3>

            </div>
            <div>
                <h4>{handTools.description}</h4>
            </div>
        </div>
    );
};

export default Purchase;