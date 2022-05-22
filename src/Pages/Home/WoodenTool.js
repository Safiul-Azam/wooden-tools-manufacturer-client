import React from 'react';

const WoodenTool = ({ tool }) => {
    const { name, description, price, minimum_quantity, available_quantity, img } = tool
    return (
        <div className='border flex justify-center flex-col'>
            <img src={img} alt="" />
            <div className='p-8 text-center'>
                <h4 className='text-lg text-secondary tracking-wider mt-1'>{name}</h4>
                <h3 className='text-xl text-primary mt-2'>price ${price}</h3>
                <h4 className='text-xl text-accent tracking-wide mt-2'>Minimum quantity {minimum_quantity}</h4>
                <h4 className='text-xl text-accent tracking-wide mt-2'>Available quantity {available_quantity}</h4>
                <p className='text-sm tracking-wider text-accent mt-2'>{description}</p>
                <button className='btn btn-outline btn-primary mt-4 rounded-none tracking-widest'>Purchase</button>
            </div>
        </div>
    );
};

export default WoodenTool;