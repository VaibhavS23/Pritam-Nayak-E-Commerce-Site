import React from 'react';
import Navbar from './Navbar';
import './Homepage.css'
const HomePage = () => {
    return (
        <div className="relative min-h-screen bg-cover bg-center " id='back' style={{ }}>
            <Navbar />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white z-0   bg-opacity-50">
                <h1 className="animated-heading">
                Don’t Just Buy Outfit, Buy an Identity
                </h1>
            </div>
        </div>
    );
};


export default HomePage;
