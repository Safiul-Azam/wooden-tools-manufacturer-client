import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Reviews from './Reviews';
import WoodenTools from './WoodenTools';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <WoodenTools></WoodenTools>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;