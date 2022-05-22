import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../Shared/CustomLink';

const Dashboard = () => {
    return (
        <div>
            <h3 className='text-center text-purple-500 text-4xl font-bold drop-shadow-lg'>welcome to your Dashboard</h3>
            <CustomLink to='/dashboard/'></CustomLink>
            <div class="drawer">
                <input id="my-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-side">
                    <label for="my-drawer" class="drawer-overlay"></label>
                    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                        <li><Link to='/dashboard/myOrder'>My Order</Link></li>
                        <li><Link to='/dashboard/addReview'>Add Review</Link></li>
                    <li><Link to='/dashboard/addReview'>My Profil</Link></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;