import React from 'react';
import './serviceareas.css';
import Header from './Header';

const ServiceAreas = () => {
    return (
        <>
        <div className="main">
            <Header />
            <div className="service-areas">
                <h1>Service Areas</h1>
                <p>We proudly serve the following areas:</p>
                <div className="cards-container">
                    <div className="card">
                        <h2>Downtown</h2>
                        <p>Fast and reliable services in the heart of the city.</p>
                    </div>
                    <div className="card">
                        <h2>Uptown</h2>
                        <p>Premium services for residential and business areas.</p>
                    </div>
                    <div className="card">
                        <h2>Suburban Districts</h2>
                        <p>Comprehensive coverage for all your needs in the suburbs.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default ServiceAreas;
