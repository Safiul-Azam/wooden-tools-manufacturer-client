import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const [token] = useToken(user)
     const from = location?.state?.from?.pathname || '/'
    if(loading){
        return <Loading></Loading>
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-error text-sm mb-4'>{error.message}</p>
    }
    if(token){
        // navigate(from, {replace:true})
    }
    return (
        <div className="flex flex-col w-full border-opacity-50">
        <div className="divider">OR</div>
        {errorMessage}
        <button onClick={()=>signInWithGoogle()} className="btn btn-primary text-white tracking-widest w-full ">Google Sign In</button>
      </div>
    );
};

export default SocialLogin;