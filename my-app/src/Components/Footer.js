import React from 'react';

const Footer = ({ logoSrc }) => {
    const footerStyle = {
        height: '209px',
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
    };
    
    const logoStyle = {
        marginBottom: '30px',
    };
    
    const paragraphStyle = {
        fontSize: '16px',
    };
    
    return (
        <footer style={footerStyle}>
        <img src={logoSrc} alt="Logo" style={logoStyle} />
        <p style={paragraphStyle}>© 2020 Kasa. All rights reserved</p>
        </footer>
        );
    };
    
    export default Footer;
