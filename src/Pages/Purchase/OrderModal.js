import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderModal = ({ handTool ,setOrder}) => {
    const { register, formState: { errors }, handleSubmit,reset } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        const order = {
            email:data.email,
            name:data.name,
            productName:handTool.productName, 
            description:data.description,
            quantity:data.quantity,
            phone:data.phone,
            address:data.address,
            perPrice:handTool.perPrice,
            totalPrice:handTool.perPrice * data.quantity
        }
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                "content-type":"application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(inserted => {
            if(inserted.insertedId){
                toast.success('your order is add to card. please pay for your order')
                reset()
                setOrder(null)
            }else{
                toast.error('sorry! try again for order')
            }
        })
    };
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-2xl font-bold text-secondary my-6'>{handTool.productName}</h3>
                        <input 
                        {...register("name")}
                        type="text" value={user.displayName || ''} readOnly className="input input-bordered w-full mb-3" />
                        <input
                        {...register("email")}
                        type="text" value={user.email || ''} readOnly className="input input-bordered w-full mb-3" />
                        <div className="form-control w-full">
                            <input
                                {...register("quantity", {
                                    min: {
                                        value: handTool.minQuantity,
                                        message: 'Please give your quantity more then in the suggestion'

                                    }, max: {
                                        value: handTool.maxQuantity,
                                        message: 'please give your quantity less then in the suggestion'
                                    }

                                })}
                                type="number"
                                required
                                placeholder={`${handTool.minQuantity} - ${handTool.maxQuantity} pieces`}
                                className="input input-bordered w-full mb-3" />
                            <label className="label">
                                {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-400 mb-4">{errors.quantity.message}</span>}
                                {errors.quantity?.type === 'max' && <span className="label-text-alt text-error">{errors.quantity.message}</span>}
                            </label>
                        </div>
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
                </div>
            </div>
        </div>
    );
};

export default OrderModal;