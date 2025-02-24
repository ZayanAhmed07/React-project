import React from "react";
import logo from "../images/logo.jpg"; 

const Header = () => {
  return (
    <header>
      <div className="header-container flex-wrap">
        <img className="main-logo" src={logo} alt="Caliber Locksmith Logo" />
        <div className="contact-info">
          <div className="contact-info-call">
            <p>Call Now!</p>
          </div>
          <div>
            Dc: 202-318-1630 <br />
            Va: 703-935-0140 <br />
            Md: 301-455-0550
          </div>
        </div>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a href="http://localhost:3000/homepage">Home</a></li>
          <li><a href="http://localhost:3000/servicenav">Services</a></li>
          <li><a href="https://example.com/securitysys">Security Sys</a></li>
          <li><a href="https://example.com/safes">Safes</a></li>
          <li><a href="https://example.com/garagedoor">Garage Door</a></li>
          <li><a href="http://localhost:3000/pricelist">Price List</a></li>
          <li><a href="http://localhost:3000/serviceareas">Service Areas</a></li>
          <li><a href="http://localhost:3000/about">About Us</a></li>
          <li><a href="http://localhost:3000/login">Login</a></li>
          <li><a href="http://localhost:3000/crud">Manage Users</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
