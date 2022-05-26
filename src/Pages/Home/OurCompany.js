import React from 'react';
import banner3 from '../../images/banner/banner5.png'

const OurCompany = () => {
    return (
        <div className='bg-base-200  mb-16'>
            <div className=" container mx-auto">
                <div className="flex items-center justify-center flex-col lg:flex-row">
                    <img src={banner3} alt='our company' className="lg:max-w-sm w-100 rounded-lg shadow-xl" />
                    <div className='lg:ml-20 w-3/4 lg:w-1/2'>
                    <h3 className='lg:text-4xl text-2xl mt-6 font-bold text-primary'>Company <span className='text-secondary'>Profile</span></h3>
                        <span className='text-secondary mt-4'>The Founder of TOP-quality Wooden tools in Japan</span>
                        <p className="py-6">
                            We have advanced production technology, perfect quality control, tight testing measures and modern production equipment to ensure the size precision of finished saw Wooden tools like HAMMER,CHISEL DRIVER,GRIP DRIVER etc. The company has many self-owned brands, among which "pilihu" brand series of ultra-thin woodworking saw blades enjoy a high reputation in the domestic market;TSUNESABURO GOTOKU KANNA andFUNAHIRO KOUSHUN SMOOTHING PLANE also get excellent response from domestic and foreign customers. With the development of the company, the tools, production, and sales teams have expanded year by year. We already have more than 20 pieces patented technologies.In addition to having a good reputation in japan, our brand products are also well received by customers abroad. teams are looking forward to your visit, cooperation and valuable suggestions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurCompany;