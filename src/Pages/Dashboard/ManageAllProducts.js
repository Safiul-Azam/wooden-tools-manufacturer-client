import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DeleteModal from './DeleteModal';
import ManageProduct from './ManageProduct';

const ManageAllProducts = () => {
    const [productDeleting, setProductDeleting] = useState(null)
    const { data: handTools, isLoading,refetch } = useQuery('handTools', () => fetch('http://localhost:5000/handTools').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-3xl font-bold text-secondary text-center my-3'>MANAGE PRODUCT</h2>
            <div className="overflow-x-auto">
                <table className="table table-compact w-2/3 mx-auto my-8 border">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Minimum</th>
                            <th>Available</th>
                            <th>Per price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            handTools.map((handTool, index) => <ManageProduct
                                key={handTool._id}
                                index={index}
                                handTool={handTool}
                                refetch={refetch}
                                setProductDeleting={setProductDeleting}
                            ></ManageProduct>)
                        }
                    </tbody>
                </table>
            </div>
            {productDeleting && <DeleteModal
            productDeleting={productDeleting}
            setProductDeleting={setProductDeleting}
            refetch={refetch}
            ></DeleteModal>}
        </div>
    );
};

export default ManageAllProducts;