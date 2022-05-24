import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddProduct = () => {
    const user = useAuthState(auth)
    const email = user[0].email
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div className='w-1/2 mx-auto border rounded-md p-4 mt-4 mb-8'>
            <h2 className='text-3xl font-bold text-secondary text-center my-3'>ADD PRODUCT</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register("email")}
                    type="text" value={email || ''} readOnly className="input input-bordered w-full mb-3" />
                <input
                    required
                    {...register("productName")}
                    type="text" placeholder='Product Name' className="input input-bordered w-full mb-3" />
                <textarea
                    required
                    {...register("description")}
                    type="text" cols='30' rows='10' placeholder='Product Description' className="input input-bordered w-full mb-3"></textarea>
                <input
                    {...register("minQuantity")}
                    type="number"
                    required
                    placeholder='Minimum Quantity'
                    className="input input-bordered w-full mb-3" />
                <input
                    {...register("maxQuantity")}
                    type="number"
                    required
                    placeholder='Available Quantity'
                    className="input input-bordered w-full mb-3" />
                <input
                    {...register("PerPrice")}
                    required
                    type="number" placeholder="Per Price" className="input input-bordered w-full mb-3" />
                <input
                    {...register("image")}
                    required
                    type="file" placeholder="Your Image" className="w-full mb-3" />
                <input className='btn btn-secondary w-full' type="submit" value='submit' />
            </form>
        </div>
    );
};

export default AddProduct;