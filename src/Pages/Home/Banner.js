import React from 'react';
import woodenBanner from '../../images/banner/wooden-banner.png'

const Banner = () => {
    return (
        <div className="hero py-32" style={{
            background:`url(${woodenBanner})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
        }}>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-primary drop-shadow-2xl tracking-wider">wooden Hand Tools</h1>
                    <p className="mb-5 text-white tracking-wide text-xl">The essence of the Japanese woodworking tool is an incredibly sharp cutting edge which leaves the wood with a satin smooth finish.</p>
                    <button className="btn tracking-widest text-sm rounded-none px-10 glass text-white">learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;