import React from 'react';
import './MainHtml.css';


const MainHtml = () => {


    return (
        <div className='flex-container'>
            <div className='logo'>
                Logo
            </div>

            <nav>
                <a>Home</a>
                <a>Services</a>
                <a>Contact</a>
                <a>Help</a>

            </nav>

            <div className='right'>
                OUR PORTAL
            </div>

        </div>

    );
};

export default MainHtml;