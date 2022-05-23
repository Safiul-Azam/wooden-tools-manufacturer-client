import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const {purchaseId} =useParams()

    oc
    return (
        <div>
            <h2>purchase page {purchaseId}</h2>
        </div>
    );
};

export default Purchase;