import React from 'react';
import './footer.css';

const Footer = ({ logoSrc }) => {
    return (
        <footer className="footer">
        <img src={logoSrc} alt="Logo" className="logo" />
        <p className="paragraph">© 2020 Kasa. All rights reserved</p>
        </footer>
        );
    };
    
    export default Footer;
