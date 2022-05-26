import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>

                    <h3 className='text-3xl font-bold text-primary'>Wooden <span className='text-secondary'>Tools</span></h3>

                    <span>Address: Gazipur Chowrasta dhaka bangladesh</span>
                    <span></span>
                    <span>Phone: +8801866775563</span>
                    <span>Monday to Saturday 10AM to 5PM</span>
                    <span>Closed Sunday.</span>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/home' className="link link-hover">Branding</Link>
                    <Link to='/home' className="link link-hover">Design</Link>
                    <Link to='/home' className="link link-hover">Marketing</Link>
                    <Link to='/home' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/home' className="link link-hover">About us</Link>
                    <Link to='/home' className="link link-hover">Contact</Link>
                    <Link to='/home' className="link link-hover">Jobs</Link>
                    <Link to='/home' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/home' className="link link-hover">Terms of use</Link>
                    <Link to='/home' className="link link-hover">Privacy policy</Link>
                    <Link to='/home' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
                <p className='text-center text-sm py-8'>&copy; Copyright {year} <span className='text-sm text-primary'>Wooden Tools</span>. All Rights Reserved</p>
        </div>
    );
};

export default Footer;