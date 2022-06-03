import { faAddressCard, faCity, faEnvelope, faLink, faPenToSquare, faPhone, faStreetView, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useProfile from '../../hooks/useProfile';
import userPic from '../../images/user/user-1.png'

const MyProfile = () => {
    const [user] = useAuthState(auth)
    const [profile] = useProfile(user)
    
    return (
        <div className=' w-3/4 mx-auto p-5'>
            <div className='flex justify-between border-slate-300 border-b-2 mb-4'>
                <h3 className="text-4xl text-secondary font-bold">Your Profile</h3>
                <Link to='/dashboard/editProfile'>
                    <button className='text-orange-500 text-4xl mb-4'><FontAwesomeIcon icon={faPenToSquare} /></button>
                </Link>
            </div>
            <div className='w-full mx-30'>
                <div class="avatar">
                    <div class="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={profile.img || userPic} alt='safiul'/>
                    </div>
                </div>
                <div className="form-control">
                    <label className=" mb-4">
                        <span className='text-lg font-bold'><FontAwesomeIcon icon={faUser} />  Name</span>
                        <h2 className="w-2/3 text-md">{user?.displayName}</h2>
                    </label>
                    <label className=" mb-4">
                        <span className='text-lg font-bold'><FontAwesomeIcon icon={faEnvelope} />  Email </span>
                        <h2 className="w-2/3 text-md">{user?.email}</h2>
                    </label>
                    <label className=" mb-4">
                        <span className='text-lg font-bold'><FontAwesomeIcon icon={faPhone} />  Phone: </span>
                        <h2 className="w-2/3 text-md">{profile?.phone || 'no data found!'}</h2>
                    </label>
                    <label className=" mb-4">
                        <span className='text-lg font-bold'><FontAwesomeIcon icon={faAddressCard} />  District </span>
                        <h2 className="w-2/3 text-md">{profile?.district || 'no data found!'}</h2>
                    </label>
                    <label className=" mb-4">
                        <span className='text-lg font-bold'><FontAwesomeIcon icon={faCity} />  City</span>
                        <h2 className="w-2/3 text-md">{profile?.city || 'no data found!'}</h2>
                    </label>
                    <label className=" mb-4">
                        <span className='text-lg font-bold'><FontAwesomeIcon icon={faStreetView} />  Street Address:</span>
                        <h2 className="w-2/3 text-md">{profile?.streetAddress || 'no data found!'}</h2>
                    </label>
                    <label className=" mb-4">
                        <span className='text-lg font-bold'><FontAwesomeIcon icon={faLink} />  Facebook Link</span>
                        <h2 className="w-2/3 text-md">{profile?.facebook || 'no data found!'}</h2>
                    </label>
                    <label className=" mb-4">
                        <span className='text-lg font-bold'><FontAwesomeIcon icon={faLink} />  Linkedin Link: </span>
                        <h2 className="w-2/3 text-md">{profile?.linkedin || 'no data found!'}</h2>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;