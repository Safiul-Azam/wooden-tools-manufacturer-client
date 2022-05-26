import { faEnvelope, faPhone, faStreetView, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const MyPortfolio = () => {
    return (
        <div className="form-control w-1/2 mx-auto border-2 my-24 p-5">
            <label className=" mb-4">
                <span className='text-lg font-bold'><FontAwesomeIcon icon={faUser} />  Name</span>
                <h2 className="w-2/3 text-md">Md Safiul Azam Riad</h2>
            </label>
            <label className=" mb-4">
                <span className='text-lg font-bold'><FontAwesomeIcon icon={faEnvelope} />  Email </span>
                <h2 className="w-2/3 text-md">safiulazamriad@gmail.com</h2>
            </label>
            <label className=" mb-4">
                <span className='text-lg font-bold'><FontAwesomeIcon icon={faPhone} />  Phone: </span>
                <h2 className="w-2/3 text-md">01866775563</h2>
            </label>
            <label className=" mb-4">
                <span className='text-lg font-bold'>Educational background</span>
                <h2 className="w-2/3 text-md">i am a madrasha's student. i read in markazul elme waddawah, savar,dhaka . i read in class jalalin</h2>
            </label>
            <label className=" mb-4">
                <span className='text-lg font-bold'>technologies font end</span>
                <ul>
                    <li>html</li>
                    <li>css</li>
                    <li>git/ git hub</li>
                    <li>Bootstrap</li>
                    <li>Tailwind css</li>
                    <li>javascript</li>
                    <li>es6</li>
                    <li>react</li>
                    <li>react router</li>
                    <li>react query</li>
                    <li>react Bootstrap</li>
                    <li>react toastify</li>
                    <li>axios</li>
                    <li>react firebase hook</li>
                    <h3 className='text-xl text-accent font-semibold'>hosting</h3>
                    <li>git hub</li>
                    <li>netlify</li>
                    <li>firebase</li>
                    <h3 className='text-xl text-accent font-semibold'>Authentication</h3>
                    <li>firebase</li>
                </ul>
            </label>
            <label className=" mb-4">
                <span className='text-lg font-bold'>technologies backend</span>
                <ul>
                    <li>node.js</li>
                    <li>express</li>
                    <li>mongodb</li>
                    <li>cors</li>
                    <li>dotenv</li>
                    <h3 className='text-xl text-accent font-semibold'>Authorization</h3>
                    <li>jwt token</li> 
                    <h3 className='text-xl text-accent font-semibold'>for hosting</h3>
                    <li>heroku</li>
                    
                </ul>
            </label>
            
        </div>
    );
};

export default MyPortfolio;