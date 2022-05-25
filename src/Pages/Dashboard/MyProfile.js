import { faAddressCard, faCity,  faEnvelope, faLink, faPenToSquare, faPhone,faStreetView, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading'

const MyProfile = () => {
    const [click, setClick] = useState(false)
    const [user] = useAuthState(auth)
    const email = user.email
    // useEffect( () =>{
    //     fetch(`http://localhost:5000/users/${email}`, {
    //         method: 'GET',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(data => setProfile(data))
    // },[email])
    const { data: profile, isLoading, refetch } = useQuery(['user', email], () => fetch(`http://localhost:5000/users/${email}`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className=' w-3/4 ml-20 border p-5'>
            <div>
                <div className=''>
                    {
                        click && <button className=' font-bold text-4xl mb-4 btn-xs text-red-500 rounded-none' onClick={() => setClick(false)}><Link to='/dashboard/myProfile'>X</Link></button>
                    }
                </div>
                {click ?
                    <Outlet></Outlet> :
                    <button className='text-orange-500 text-4xl mb-4' onClick={() => setClick(true)}><Link to='/dashboard/myProfile/editProfile'><FontAwesomeIcon icon={faPenToSquare} /></Link></button>
                }
            </div>
            <div className='w-full mx-30'>
                {click ||
                    <div className="form-control">
                        <label className=" mb-4">
                            <span className='text-lg font-bold'><FontAwesomeIcon icon={faUser} />  Name</span>
                            <h2 className="w-2/3 text-md">{user.displayName}</h2>
                        </label>
                        <label className=" mb-4">
                            <span className='text-lg font-bold'><FontAwesomeIcon icon={faEnvelope} />  Email </span>
                            <h2 className="w-2/3 text-md">{user.email}</h2>
                        </label>
                        <label className=" mb-4">
                            <span className='text-lg font-bold'><FontAwesomeIcon icon={faPhone} />  Phone: </span>
                            <h2 className="w-2/3 text-md">{profile?.phone || 'no data found!'}</h2>
                        </label>
                        <label className=" mb-4">
                            <span className='text-lg font-bold'><FontAwesomeIcon icon={faAddressCard} />  District </span>
                            <h2 className="w-2/3 text-md">{profile.district || 'no data found!'}</h2>
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
                    </div>}
            </div>
        </div>
    );
};

export default MyProfile;