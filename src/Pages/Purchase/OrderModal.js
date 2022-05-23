import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const OrderModal = ({ handTool }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth)

    const onSubmit = data => {
        const order = {
            email:data.email,
            userName:data.displayName,
            name:data.name, 
            description:data.description,
            quantity:data.quantity,
            phone:data.phone,
            address:data.address,
            totalPrice:handTool.price * data.quantity
        }
        fetch('http://localhost:5000/order',{
            method:'POST',
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    };
    return (
        <div>
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h3 className='text-2xl text-secondary my-6'>{handTool.name}</h3>
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
                                        value: handTool.minimum_quantity,
                                        message: 'Please give your quantity more then in the suggestion'

                                    }, max: {
                                        value: handTool.available_quantity,
                                        message: 'please give your quantity less then in the suggestion'
                                    }

                                })}
                                type="number"
                                required
                                placeholder={`${handTool.minimum_quantity} - ${handTool.available_quantity} pieces`}
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
                    <div className="modal-action">
                        <label htmlFor="order-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderModal;