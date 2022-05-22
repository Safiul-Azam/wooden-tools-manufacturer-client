import React, { useEffect, useState } from 'react';
import WoodenTool from './WoodenTool';

const WoodenTools = () => {
    const [tools, setTools] =useState([])
    useEffect(()=>{
        fetch('tools.json')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
    return (
        <div className='my-20 container mx-auto'> 
            <h3 className="text-3xl text-accent font-bold text-center">Wooded Working Tools</h3>
        <div className='grid grid-cols-3 gap-10'>
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

export default WoodenTools;