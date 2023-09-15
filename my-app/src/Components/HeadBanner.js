import React from 'react';
import './headBanner.css'; // Importez le fichier CSS

const HeadBanner = ({ backgroundImage, bannerText }) => {
    return (
        <div className="head-banner" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="image-overlay"></div>
        <div className="text-style">
        {bannerText}
        </div>
        </div>
        );
    };
    
    export default HeadBanner;
