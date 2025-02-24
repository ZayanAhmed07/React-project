import React from 'react';
import './about.css';
import Header from './Header';

const AboutUs = () => {
    return (
        <>
        <div className="main">
            <Header title="About Us" subtitle="Your Trusted Partner in Security Solutions" />
            <div className="about-us">
                <h1>About Us</h1>
                <p>Caliber Locksmith has been delivering reliable services for over a decade. Trust us for all your security needs.</p>
                <div className="about-details">
                    <div className="about-card">
                        <h2>Our Mission</h2>
                        <p>To provide top-quality locksmith and security solutions that ensure safety and peace of mind.</p>
                    </div>
                    <div className="about-card">
                        <h2>Our Values</h2>
                        <p>Integrity, professionalism, and a commitment to excellence in every service we offer.</p>
                    </div>
                    <div className="about-card">
                        <h2>Our History</h2>
                        <p>Started in 2010, Caliber Locksmith has grown to become a trusted name in the industry.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default AboutUs;