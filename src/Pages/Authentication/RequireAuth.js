import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth)
    // const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // if(!user.emailVerified){
    //     return <div className='text-center my-5 border p-5 w-50 mx-auto'>
    //     <h2 className='title-color'>Your Email is not verified</h2>
    //     <h4>Please verify your email</h4>
    //     <button
    //         onClick={async () => {
    //             await sendEmailVerification();
    //             toast('Sent new verification email');
    //         }} className='rounded-0 my-3 btn btn-secondary glass' variant="dark"
    //     >
    //        New verify email</button>
    // </div>
    // }
    return children
};

export default RequireAuth;