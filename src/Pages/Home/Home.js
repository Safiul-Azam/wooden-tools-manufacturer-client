import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Subscription from './Subscription';
import OurCompany from './OurCompany';
import Reviews from './Reviews';
import WoodenTools from './WoodenTools';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <WoodenTools></WoodenTools>
            <OurCompany></OurCompany>
            <Reviews></Reviews>
            <BusinessSummary></BusinessSummary>
            <Subscription></Subscription>
            <Footer></Footer>
        </div>
    );
};

export default Home;