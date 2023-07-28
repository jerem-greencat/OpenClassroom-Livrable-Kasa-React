import React from 'react';

const HeadBanner = ({ backgroundImage, bannerText }) => {
    const bannerStyle = {
        position: 'relative',
        height: '223px', // Ajustez la hauteur selon vos préférences
        color: '#FFFFFF',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '100px',
        borderRadius: '25px',
    };
    
    const imageOverlayStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Remplacez cette couleur par la teinte de votre choix
        zIndex: 1,
        borderRadius: '25px',
    };
    
    const textStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        position: 'relative',
        zIndex: 2,
    };
    
    return (
        <div style={bannerStyle}>
        <div style={imageOverlayStyle}></div>
        <div style={textStyle}>
        {bannerText}
        </div>
        </div>
        );
    };
    
    export default HeadBanner;
