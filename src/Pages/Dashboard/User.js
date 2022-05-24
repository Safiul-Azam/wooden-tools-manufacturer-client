import React from 'react';
import { toast } from 'react-toastify';

const user = ({user,index,refetch}) => {
    const {displayName, email, role} = user

    const createAdmin = ()=>{

        fetch(`http://localhost:5000/users/admin/${email}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res =>  {
            if(res.status === 403){
                toast.warning('you are not make a admin')
            }
           return res.json()})
        .then(data => {
            if(data.modifiedCount){
                toast.success('made a new admin')
                refetch()
            }
        })
    }
    return (
        <tr>
            <th>{index}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td>{role !== 'admin' &&
            <button onClick={createAdmin} className='btn rounded-none btn-xs btn-success text-xs text-gray-200'>Admin</button>}</td>
            <td><button className='btn rounded-none btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default user;