import React from 'react';
import woodenBanner from '../../images/banner/wooden-banner.jpg'

const Banner = () => {
    return (
        <div class="hero py-32" style={{
            background:`url(${woodenBanner})`,
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
        }}>
            <div class="hero-content text-center text-neutral-content">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold text-primary drop-shadow-2xl tracking-wider">wooden Hand Tools</h1>
                    <p class="mb-5 text-white tracking-wide text-xl">The essence of the Japanese woodworking tool is an incredibly sharp cutting edge which leaves the wood with a satin smooth finish.</p>
                    <button class="btn tracking-widest text-sm rounded-none px-10 glass text-white">learn More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;