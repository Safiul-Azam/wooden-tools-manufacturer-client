import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import EditProfile from './EditProfile';

const MyProfile = () => {
    const [click, setClick] = useState(false)
    const [user] = useAuthState(auth)
    const [profile, setProfile] = useState({})
    const email = user.email
    useEffect( () =>{
        fetch(`http://localhost:5000/users/${email}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => setProfile(data))
    },[email])
    return (
        <div className=' w-3/4 ml-20 border p-5'>
            <div>
            <div className='top-32'>
                {
                    click && <button className=' font-bold text-4xl btn-xs text-red-500 rounded-none' onClick={() => setClick(false)}><Link to='/dashboard/myProfile'>X</Link></button>
                }
            </div>
                {click ?
                    <Outlet></Outlet> :
                    <button className='text-orange-500 text-4xl' onClick={() => setClick(true)}><Link to='/dashboard/myProfile/editProfile'><FontAwesomeIcon icon={faPenToSquare} /></Link></button>
                }
            </div>
            <div className='w-full mx-30'>
                {click ||
                    <div className="form-control">
                        <label className=" mb-4">
                            <span>Name: </span>
                            <input readOnly type="text"  value={user.displayName} className="input w-2/3 text-lg font-semibold" />
                        </label>
                        <label className=" mb-4">
                            <span>Email: </span>
                            <input readOnly type="text" value={user.email} className="input w-2/3 text-lg font-semibold" />
                        </label>
                        <label className=" mb-4">
                            <span>Phone: </span>
                            <input readOnly type="text" value={profile.phone || 'Please add your phone number'} className="input w-2/3 text-lg font-semibold" />
                        </label>
                        <label className="">
                            <span>District: </span>
                            <input readOnly type="text" value={profile.district || 'please add your District address'} className="input w-2/3 text-lg font-semibold" />
                        </label>
                        <label className=" mb-4">
                            <span>City: </span>
                            <input readOnly type="text" value={profile.city || 'please add your City'} className="input w-2/3 text-lg font-semibold" />
                        </label>
                        <label className=" mb-4">
                            <span>Street Address: </span>
                            <input readOnly type="text" value={profile.streetAddress || 'please add your street address'} className="input w-2/3 text-lg font-semibold" />
                        </label>
                        <label className=" mb-4">
                            <span>Facebook Link: </span>
                            <input readOnly type="text" value={profile.facebook || 'please add your facebook link'} className="input w-2/3 text-lg font-semibold" />
                        </label>
                        <label className=" mb-4">
                            <span>Linkedin Link: </span>
                            <input readOnly type="text" value={profile.linkedin || 'please add your linkedin link'} className="input w-2/3 text-lg font-semibold" />
                        </label>
                    </div>
                }
            </div>
        </div>
    );
};

export default MyProfile;