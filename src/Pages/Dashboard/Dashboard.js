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
        <div className="drawer drawer-mobile">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-8">
                {/* <!-- Page content here --> */}
                <h3 className='text-center text-purple-500 text-4xl font-bold drop-shadow-lg'>welcome to your Dashboard</h3>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-gray-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><CustomLink to='/dashboard/myProfile'>My Profile</CustomLink></li>
                    {admin ?
                        <>
                            <li><CustomLink to='/dashboard/users'>Users</CustomLink></li>
                            <li><CustomLink to='/dashboard/addProduct'>Add Product</CustomLink></li>
                            <li><CustomLink to='/dashboard/manageAllProducts'>Manage Product</CustomLink></li>
                            <li><CustomLink to='/dashboard/allOrders'>All Orders</CustomLink></li>
                        </>:
                        <>
                        <li><CustomLink to='/dashboard/myOrders'>My Order</CustomLink></li>
                        <li><CustomLink to='/dashboard/addReview'>Add Review</CustomLink></li>
                    </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;