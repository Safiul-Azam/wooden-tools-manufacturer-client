import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink';

const Dashboard = () => {
    return (
        <div>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    {/* <!-- Page content here --> */}
                    <h3 className='text-center text-purple-500 text-4xl font-bold drop-shadow-lg'>welcome to your Dashboard</h3>
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><CustomLink to='/dashboard/myOrder'>My Order</CustomLink></li>
                        <li><CustomLink to='/dashboard/addReview'>Add Review</CustomLink></li>
                        <li><CustomLink to='/dashboard/myProfile'>My Profile</CustomLink></li>

                    </ul>
                </div>
            </div>




            <div className='drawer-content flex flex-col mt-24"'>
                
                <Outlet></Outlet>
            </div>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;