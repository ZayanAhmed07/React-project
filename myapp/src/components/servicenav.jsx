import React from 'react';
import './servicenav.css';
import Header from './Header';

const Services = () => {
    return (
        <>
        <div className="main">
            <Header title="Welcome to Our Services" subtitle="Explore our wide range of services tailored for you." />
            <div className="services">
                <h1>Our Services</h1>
                <table className="services-table">
                    <thead>
                        <tr>
                            <th>Service</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Home Services</td>
                            <td>Professional key duplication and lock repair for your home.</td>
                        </tr>
                        <tr>
                            <td>System Security</td>
                            <td>Comprehensive security system installation and maintenance.</td>
                        </tr>
                        <tr>
                            <td>Safes</td>
                            <td>Secure and durable safes for your valuables.</td>
                        </tr>
                        <tr>
                            <td>Garage Door Assistance</td>
                            <td>Quick and reliable garage door lock services.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default Services;
