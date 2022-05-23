import React from 'react';

const user = ({user,index}) => {
    const {displayName, email} = user
    return (
        <tr>
            <th>{index}</th>
            <td>{displayName}</td>
            <td>{email}</td>
            <td><button className='btn rounded-none btn-xs btn-success text-xs text-gray-200'>Admin</button></td>
            <td><button className='btn rounded-none btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default user;