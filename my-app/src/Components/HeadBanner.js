import React from 'react';
import './headBanner.css'; 

const HeadBanner = ({ id, backgroundImage, bannerText }) => {
    return (
        <div id={id} className="head-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="image-overlay"></div>
        <div className="text-style">
        {bannerText}
        </div>
        </div>
        );
    };
    
    export default HeadBanner;
