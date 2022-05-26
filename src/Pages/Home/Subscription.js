import React from 'react';
import bannerTools from '../../images/banner/banner6.png'

const Subscription = () => {
    return (
        <div className="hero py-16" style={{
            background: `url(${bannerTools})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <div className=''>
                        <div className="form-control">
                            <p className=' text-yellow-200 text-lg'>Newsletter</p>
                            <h3 className='text-primary my-2 text-4xl font-bold'>Subscribe to our newsletter</h3>
                            <p className='w-full lg:w-1/2 mx-auto mb-5 text-xl font-semibold text-yellow-200'>Join our subscribers list to get the latest news, updates and special offers delivered directly in your inbox</p>
                            <div className="input-group flex justify-center">
                                <input placeholder='Enter Your Email' className="input input-bordered w-full max-w-xs" type="text" />
                                <button className="btn glass text-white">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscription;