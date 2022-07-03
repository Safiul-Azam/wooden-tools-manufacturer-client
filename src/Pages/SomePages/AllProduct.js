import React, { useEffect, useState } from 'react';
import WoodenTool from '../Home/WoodenTool';

const AllProduct = () => {
    const [tools, setTools] =useState([])
    useEffect(()=>{
        fetch('https://guarded-cliffs-74230.herokuapp.com/handTools')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='my-28 container mx-auto'> 
            <h3 className="text-3xl text-accent font-bold text-center mb-4">Wooded Working Tools</h3>
            <p className='text-center text-secondary mb-8'>Mastering the use of fine Japanese woodworking tools requires a great deal of patience, and years of practice.</p>
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10'>
            {
                tools.map(tool => <WoodenTool
                key={tool._id}
                tool={tool}
                ></WoodenTool>)
            }
        </div>
        </div>
    );
};

export default AllProduct;