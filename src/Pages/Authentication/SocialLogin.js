import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    if(loading){
        return <Loading></Loading>
    }
    let errorMessage;
    if (error) {
        errorMessage = <p className='text-error text-sm mb-4'>{error.message}</p>
    }
    if(user){
        navigate(from, {replace:true})
    }
    return (
        <div class="flex flex-col w-full border-opacity-50">
        <div class="divider">OR</div>
        {errorMessage}
        <button onClick={()=>signInWithGoogle()} class="btn btn-primary text-white tracking-widest w-full ">Google Sign In</button>
      </div>
    );
};

export default SocialLogin;