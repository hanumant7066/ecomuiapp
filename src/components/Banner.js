import React, { useState, useEffect } from 'react';
import './Banner.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';


const Banner = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
    const banners = ['This is banner 1 content,  ', 'Banner 2', 'Banner 3']; // Add your banner content here
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBannerIndex(prevIndex =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(intervalId);
    }, [banners]);

    return (
        <div className="banner-container">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`banner ${index === currentBannerIndex ? 'active' : ''}`}
                >
                    {banner}
                    <img
                        src={image1}
                        alt={`Banner`}
                    />
                    <img
                        src={image2}
                        alt={`Banner`}
                    />
                    <img
                        src={image3}
                        alt={`Banner`}
                    />
                </div>
            ))}

        </div>
    );
};

export default Banner;
