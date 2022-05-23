import React from 'react';
import { Outlet } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col mt-24">
                {/* <!-- Page content here --> */}
                <h3 className='text-center text-purple-500 text-4xl font-bold drop-shadow-lg'>welcome to your Dashboard</h3>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side mt-16">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-gray-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><CustomLink to='/dashboard/myOrders'>My Order</CustomLink></li>
                    <li><CustomLink to='/dashboard/addReview'>Add Review</CustomLink></li>
                    <li><CustomLink to='/dashboard/myProfile'>My Profile</CustomLink></li>
                    <li><CustomLink to='/dashboard/users'>Users</CustomLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;