import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="footer p-10 bg-base-200 text-base-content">
            <div>

                <h3 className='text-3xl  font-bold text-primary'>Wooden <span className='text-secondary'>Tools</span></h3>

                <span>Address: Gazipur Chowrasta dhaka bangladesh</span>
                <span></span>
                <span>Phone: +8801866775563</span>
                <span>Monday to Saturday 10AM to 5PM</span>
                <span>Closed Sunday.</span>
            </div>
            <div>
                <span class="footer-title">Services</span>
                <Link to='/home' class="link link-hover">Branding</Link>
                <Link to='/home' class="link link-hover">Design</Link>
                <Link to='/home' class="link link-hover">Marketing</Link>
                <Link to='/home' class="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span class="footer-title">Company</span>
                <Link to='/home' class="link link-hover">About us</Link>
                <Link to='/home' class="link link-hover">Contact</Link>
                <Link to='/home' class="link link-hover">Jobs</Link>
                <Link to='/home' class="link link-hover">Press kit</Link>
            </div>
            <div>
                <span class="footer-title">Legal</span>
                <Link to='/home' class="link link-hover">Terms of use</Link>
                <Link to='/home' class="link link-hover">Privacy policy</Link>
                <Link to='/home' class="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;