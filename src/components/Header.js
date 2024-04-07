import React from 'react';
import loginImage from '../assets/images/login-icon.png';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ height: '80px' }}> 
            <div className="container-fluid">
                <label className="navbar-brand">E-comm app</label>
                <div className="d-flex align-items-center" >
                    <input className="custom-input me-2" type="search" placeholder="Search for products" style={{ width: '900px', padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }} aria-label="Search" />
                    <button className="btn btn-outline-success ml-0" type="submit">Search</button>
                </div>
                <div className="d-flex align-items-center">
                    <img src={loginImage} alt="Logo" height="30" />
                    <button className="btn btn-primary me-2">Login</button>
                </div>
            </div>
        </nav>
    );
};

export default Header;
