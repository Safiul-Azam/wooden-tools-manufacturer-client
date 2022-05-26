// import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { toast } from 'react-toastify';
// import auth from '../../firebase.init';

// const OrderModal = ({ handTool ,setOrder}) => {
   
//     return (
        
//     );
// };

// export default OrderModal;




//----------------------------------------
// <div className='text-center mt-8'>
            //     <button className='btn-xs btn rounded-r-none'><FontAwesomeIcon icon={faMinus} /></button>
            //     <input ref={inputRef} className='border' name='quantity' type="number" />
            //     <button onClick={handlePlus} className='btn-xs btn rounded-l-none'><FontAwesomeIcon icon={faPlus} /></button>
            // </div>
            // <form >
                
            // </form>
            // <h3>total price:{quantity}</h3>



            // <div className="form-control">
            //                 <button className='btn-xs btn rounded-r-none'><FontAwesomeIcon icon={faMinus} /></button>
            //                     <input
            //                         {...register("quantity", {
            //                             min: {
            //                                 value: handTool.minQuantity,
            //                                 message: 'Please give your quantity more then in the suggestion'

            //                             }, max: {
            //                                 value: handTool.maxQuantity,
            //                                 message: 'please give your quantity less then in the suggestion'
            //                             }

            //                         })}
            //                         type="number"
            //                         required
            //                         placeholder={`${handTool.minQuantity} - ${handTool.maxQuantity} pieces`}
            //                         className="input input-bordered mb-3" />
            //                     <button className='btn-xs btn rounded-l-none'><FontAwesomeIcon icon={faPlus} /></button>
            //                     <label className="label">
            //                         {errors.quantity?.type === 'min' && <span className="label-text-alt text-red-400 mb-4">{errors.quantity.message}</span>}
            //                         {errors.quantity?.type === 'max' && <span className="label-text-alt text-error">{errors.quantity.message}</span>}
            //                     </label>
            //                 </div>