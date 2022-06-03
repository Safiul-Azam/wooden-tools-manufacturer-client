import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import useProfile from '../../hooks/useProfile';
import CustomLink from '../Shared/CustomLink';
import userPic from '../../images/user/user-1.png'

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    const [profile] = useProfile(user)

    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 container mx-auto mb-16 mt-28'>
            <div className='mb-4 bg-slate-200 rounded-2xl mr-0 lg:mr-4'>
                <ul className="menu w-3/4 mx-auto">
                <div class="avatar mx-auto mt-8 mb-4 flex flex-col">
                    <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img className='block' src={profile.img ||userPic} alt='profile'/>
                    </div>
                      <li> {admin && <p className='text-lg text-primary'>Admin</p>}</li>
                </div>
                    <li><CustomLink to='/dashboard/myProfile'>My Profile</CustomLink></li>
                    {admin ?
                        <>
                            <li><CustomLink to='/dashboard/users'>Users</CustomLink></li>
                            <li><CustomLink to='/dashboard/addProduct'>Add Product</CustomLink></li>
                            <li><CustomLink to='/dashboard/manageAllProducts'>Manage Product</CustomLink></li>
                            <li><CustomLink to='/dashboard/allOrders'>All Orders</CustomLink></li>
                        </> :
                        <>
                            <li><CustomLink to='/dashboard/myOrders'>My Order</CustomLink></li>
                            <li><CustomLink to='/dashboard/addReview'>Add Review</CustomLink></li>
                        </>
                    }
                </ul>
            </div>
            <div className='col-span-4 rounded-2xl bg-slate-200'>
                <div className="">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
        // <div className="drawer drawer-mobile w-full mx-auto container mt-28">
        //     <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        //     

        // </div>
    );
};

export default Dashboard;