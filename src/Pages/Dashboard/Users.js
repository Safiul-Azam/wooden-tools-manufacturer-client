import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User'

const Users = () => {
    const { data: users, isLoading } = useQuery('users', () => fetch('http://localhost:5000/users').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div class="overflow-x-auto">
             <h2 className='text-3xl font-bold text-secondary text-center mt-8'>ALL USERS</h2>
            <table class="table w-2/3 mx-auto mt-8 border">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Create Admin</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user,index) => <User
                            key={user._id}
                            user={user}
                            index={index}
                        ></User>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;