import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import User from './User'

const Users = () => {
    const navigate = useNavigate()
    const { data: users, isLoading , refetch } = useQuery('users', () => fetch('https://guarded-cliffs-74230.herokuapp.com/users',{
        method:'GET',
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => {
        if(res.status === 403){
            signOut(auth)
            localStorage.removeItem('accessToken')
            navigate('/login')
        }
       return res.json()}))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="overflow-x-auto">
             <h2 className='text-3xl font-bold text-secondary text-center mt-8'>ALL USERS</h2>
            <table className="table table-compact w-2/3 mx-auto mt-8 border">
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
                            refetch={refetch}
                        ></User>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Users;