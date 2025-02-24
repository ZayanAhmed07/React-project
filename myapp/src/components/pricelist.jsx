import React from 'react';
import './pricelist.css';
import Header from './Header';

const PriceList = () => {
    return (
        <>
        <div className="main">
            <Header />
            <div className="price-list">
                <h1>Price List</h1>
                <p>Contact us for a detailed quote tailored to your needs.</p>
                <table className="price-table">
                    <thead>
                        <tr>
                            <th>Key Type</th>
                            <th>Price (USD)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>House Key</td>
                            <td>$5</td>
                        </tr>
                        <tr>
                            <td>Car Key</td>
                            <td>$25</td>
                        </tr>
                        <tr>
                            <td>Smart Key</td>
                            <td>$50</td>
                        </tr>
                        <tr>
                            <td>Master Key</td>
                            <td>$75</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
};

export default PriceList;
