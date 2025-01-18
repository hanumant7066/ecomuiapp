import React, { useState, useEffect, useMemo } from 'react';
import './Banner.css';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';

const Banner = () => {
    const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

    // Use useMemo to ensure a stable reference for the banners array
    const banners = useMemo(
        () => ['This is banner 1 content', 'Banner 2', 'Banner 3'],
        []
    );

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentBannerIndex(prevIndex =>
                prevIndex === banners.length - 1 ? 0 : prevIndex + 1
            );
        }, 4000);

        return () => clearInterval(intervalId); // Cleanup interval on unmount
    }, [banners]); // banners is now stable, so no unnecessary re-renders

    return (
        <div className="banner-container">
            {banners.map((banner, index) => (
                <div
                    key={index}
                    className={`banner ${index === currentBannerIndex ? 'active' : ''}`}
                >
                    <p>{banner}</p>
                    {index === 0 && <img src={image1} alt="Banner 1" />}
                    {index === 1 && <img src={image2} alt="Banner 2" />}
                    {index === 2 && <img src={image3} alt="Banner 3" />}
                </div>
            ))}
        </div>
    );
};

export default Banner;
