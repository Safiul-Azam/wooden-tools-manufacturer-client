import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Reviews from './Reviews';
import WoodenTools from './WoodenTools';

const Home = () => {
    return (
        <div className='mt-16'>
            <Banner></Banner>
            <WoodenTools></WoodenTools>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;