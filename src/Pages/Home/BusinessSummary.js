import { faCommentAlt, faDollar, faEarthAmerica, faToolbox, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-24 bg-base-200 p-16'>
               <h3 className='text-4xl  font-bold text-primary text-center'>TRUST IS THE KEY OF BUSINESS</h3>
               <p className='text-center text-secondary text-lg mb-16'>Try to work for user satisfaction</p>
            <div className="stats stats-vertical lg:stats-horizontal shadow w-full text-center mx-auto">
                <div className="stat">
                    <div><FontAwesomeIcon className='text-4xl text-secondary' icon={faEarthAmerica} /></div>
                    <div className="stat-value text-primary my-2">24+</div>
                    <div className=" mb-2 text-xl text-accent font-bold">Country</div>
                    <div className="stat-desc text-sm font-semibold">Jan 1st 2019 - Feb 1st 2022</div>
                </div>

                <div className="stat">
                    <div><FontAwesomeIcon className='text-4xl text-secondary' icon={faToolbox} /></div>
                    <div className="stat-value text-primary my-2">400K+</div>
                    <div className=" mb-2 text-xl text-accent font-bold">Product Sells</div>
                    <div className="stat-desc text-sm font-semibold">↗︎ 350 (50%)</div>
                </div>
                <div className="stat">
                <div><FontAwesomeIcon className='text-4xl text-secondary' icon={faUserFriends} /></div>
                    <div className="stat-value text-primary my-2">434+</div>
                    <div className=" mb-2 text-xl text-accent font-bold">Our Client</div>
                    <div className="stat-desc text-sm font-semibold">↘︎ 30 (8%)</div>
                    
                </div>
                <div className="stat">
                <div><FontAwesomeIcon className='text-4xl text-secondary' icon={faCommentAlt} /></div>
                    <div className="stat-value text-primary my-2">268+</div>
                    <div className=" mb-2 text-xl text-accent font-bold">FeedBack</div>
                    <div className="stat-desc text-sm font-semibold">↘︎ 55 (16%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;