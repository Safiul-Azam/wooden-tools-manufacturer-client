import { faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin'

const WoodenTool = ({ tool }) => {
    const { _id, productName, description, perPrice, minQuantity, maxQuantity, img } = tool
    const [user] = useAuthState(auth)
    return (
        <div className='border p-4 flex justify-center flex-col hover:shadow-2xl ease-in duration-300 rounded'>
            <img className='w-4/5 mx-auto hover:scale-110 hover:mb-3 ease-in duration-150' src={img} alt="" />
            <div className='p-3 text-center'>
                <h4 className='text-sm font-bold text-secondary tracking-wider mt-1'>{productName}</h4>
                <h3 className='text-xl font-semibold text-primary mt-2'>Price ${perPrice}/<span className='text-lg text-secondary'>Per</span></h3>
                <h4 className='text-sm text-accent tracking-wide mt-2'>{minQuantity}<FontAwesomeIcon className='text-secondary mx-2' icon={faMinus} />{maxQuantity}<span className='text-xs text-secondary'> Pieces</span> (OQ)</h4>
                {<Link to={`/purchase/${_id}`}><button className='btn btn-outline btn-primary mt-4 rounded-none tracking-widest'>Purchase</button></Link>}
            </div>
        </div>
    );
};

export default WoodenTool;