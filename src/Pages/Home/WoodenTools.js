import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WoodenTool from './WoodenTool';

const WoodenTools = () => {
    const [tools, setTools] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/handTools')
            .then(res => res.json())
            .then(data => setTools(data))
    }, [])
    return (
        <div className='my-28 container mx-auto'>
            <h3 className='lg:text-4xl text-2xl mt-6 font-bold text-primary text-center mb-4'>Wooded Working <span className='text-secondary'>Tools</span></h3>
            <p className='text-center text-secondary mb-12'>Mastering the use of fine Japanese woodworking tools requires a great deal of patience, and years of practice.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-24'>
                {
                    tools.slice(-6).map(tool => <WoodenTool
                        key={tool._id}
                        tool={tool}
                    ></WoodenTool>)
                }
            </div>
            <div className='text-center mt-8'>
                <Link to='/allProduct' className='btn btn-sm text-white btn-secondary rounded-none'>see more</Link>
            </div>
        </div>
    );
};

export default WoodenTools;