import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';
import CustomLink from '../Shared/CustomLink';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin] = useAdmin(user)
    return (
        <div className='grid grid-cols-1 lg:grid-cols-5 container mx-auto mb-16 mt-28'>
            <div className='mb-4 bg-slate-200 rounded-2xl mr-0 lg:mr-4'>
                <ul className="menu">
                    <li className=''><CustomLink to='/dashboard/myProfile'>My Profile</CustomLink></li>
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