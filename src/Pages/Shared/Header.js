import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import CustomLink from './CustomLink';

const Header = () => {
    const [user] = useAuthState(auth)
    const logOut = ()=>{
        signOut(auth)
    }
    const menu = <>
        <li><CustomLink to='/home'>Home</CustomLink></li>
        <li><CustomLink to='/todo'>Item</CustomLink></li>
        <li><CustomLink to='/class'>Home</CustomLink></li>
        {
            user && <li><CustomLink to='/dashboard'>Dashboard</CustomLink></li>
        }
        {user? 
            <li><button onClick={logOut} className='btn-ghost'>Sign Out</button></li>:
            <li><CustomLink to='/login'>Login</CustomLink></li>
        }
    </>
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menu}
                        </ul>
                    </div>
                    <Link to='/home' className="text-2xl tracking-widest font-bold text-accent">Wooden Tools</Link>
                </div>
                        <label for="my-drawer" tabIndex="1" className="btn btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;