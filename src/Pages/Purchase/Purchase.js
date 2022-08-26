import React, { useRef, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const Purchase = () => {
    const [order, setOrder] = useState(null)
    const [total, setTotal] = useState(0)
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const [user] = useAuthState(auth)
    const inputRef = useRef(0)
    const { purchaseId } = useParams()
    const url = `https://guarded-cliffs-74230.herokuapp.com/handTools/${purchaseId}`
    const { data: handTool, isLoading } = useQuery(['tools', purchaseId], () => fetch(url).then(res => res.json()))

    const handleIncrease = () => {
        const quantity = inputRef.current.value
        let quantityParse = parseFloat(quantity)
        if (quantityParse < handTool.maxQuantity) {
            quantityParse = quantityParse + 1
            inputRef.current.value = quantityParse
        } else {
            return toast.warning("can't order above your available quantity")
        }
    }
    const handleDecrease = () => {
        const quantity = inputRef.current.value
        let quantityParse = parseFloat(quantity)
        if (quantityParse > handTool.minQuantity) {
            quantityParse = quantityParse - 1
            inputRef.current.value = quantityParse
        } else {
            return toast.warning("can't order below your minimum quantity")
        }
    }


    // ONSUBMIT FOR ADDED CART FILED
    const onSubmit = data => {
        const quantity = inputRef.current.value
        const order = {
            email: data.email,
            name: data.name,
            productName: handTool.productName,
            quantity: quantity,
            phone: data.phone,
            address: data.address,
            perPrice: handTool.perPrice,
            totalPrice: handTool.perPrice * quantity
        }
        fetch('https://guarded-cliffs-74230.herokuapp.com/order', {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    toast.success('your order is add to card. please pay for your order')
                    reset()
                    setOrder(null)
                } else {
                    toast.error('sorry! try again for order')
                }
            })
    };
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='container mx-auto mt-28'>
            <h2 className="text-4xl mb-10 text-secondary text-center font-bold">Purchase Page</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                <div>
                    <img className='w-full border shadow-lg' src={handTool.img} alt="" />
                </div>
                <div>
                    <h3 className='text-xl text-secondary font-semibold mb-2'>Factory directly sales <span className='text-primary text-2xl'> {handTool.productName}</span></h3>
                    <hr className='my-2' />
                    <p>{handTool.description}</p>
                    <hr className='my-2' />
                    <h4 className='text-3xl text-primary mb-4'>Price: ${handTool.perPrice}/<span className='text-lg text-secondary'>Per piece</span></h4>
                    <hr className='mb-4' />
                    <p className='text-xl font-semibold'>Quantity: {handTool.minQuantity}-{handTool.maxQuantity} <span className='text-sm text-secondary'>Pieces</span></p>
                    <hr className='my-2' />

                    <h3 className='text-xl mb-4 text-primary font-bold text-center   '>Manage Your Quantity</h3>
                    <div className='text-center mb-8 flex'>
                        <button onClick={handleDecrease} className='btn-md btn rounded-r-none'><FontAwesomeIcon icon={faMinus} /></button>
                        <input ref={inputRef} className='border w-3/4 text-center input-bordered input rounded-none text-lg' placeholder={handTool.minQuantity} value={handTool.minQuantity} />
                        <button onClick={handleIncrease} className='btn-md btn rounded-l-none'><FontAwesomeIcon icon={faPlus} /></button>
                    </div>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            {...register("name")}
                            type="text" value={user.displayName || ''} readOnly className="input input-bordered w-full mb-3" />
                        <input
                            {...register("email")}
                            type="text" value={user.email || ''} readOnly className="input input-bordered w-full mb-3" />
                        <input
                            {...register("phone")}
                            required
                            type="number" placeholder="Phone" className="input input-bordered w-full mb-3" />
                        <input
                            {...register("address")}
                            required
                            type="text" placeholder="Your Address" className="input input-bordered w-full mb-3" />
                        <input className='btn btn-secondary w-full' type="submit" value='submit' />
                    </form>
                    <div className='w-full text-center'>
                        <Link to='/dashboard/myOrders'><button className='btn btn-primary w-full mt-4'>Proceed CheckOut</button></Link>
                        <button className='btn btn-primary btn-sm rounded-full bg-orange-600 text-white w-1/2 my-4'><FontAwesomeIcon className='mr-2 text-lg font-normal' icon={faEnvelope} />Contact Supplier</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Purchase;
