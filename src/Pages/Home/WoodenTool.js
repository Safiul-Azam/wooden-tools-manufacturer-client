import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const WoodenTool = ({ tool }) => {
    const { _id,productName, description, perPrice, minQuantity, maxQuantity, img } = tool
    return (
        <div className='border flex justify-center flex-col'>
            <img src={img} alt="" />
            <div className='p-8 text-center'>
                <h4 className='text-lg font-bold text-secondary tracking-wider mt-1'>{productName}</h4>
                <h3 className='text-2xl font-semibold text-primary mt-2'>price ${perPrice}/<span className='text-lg text-secondary'>Per</span></h3>
                <h4 className='text-xl text-accent tracking-wide mt-2'>{minQuantity}<FontAwesomeIcon className='text-secondary mx-2' icon={faMinus}/>{maxQuantity}<span className='text-xs text-secondary'>Pieces</span> (OQ)</h4>
                <p className='text-sm tracking-wider text-accent mt-2'>{description}</p>
                <Link to={`/purchase/${_id}`} className='btn btn-outline btn-primary mt-4 rounded-none tracking-widest'>Purchase</Link>
            </div>
        </div>
    );
};

export default WoodenTool;