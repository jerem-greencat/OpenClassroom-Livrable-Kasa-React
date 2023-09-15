import React, { useState } from 'react';
import './header.css'; 

const Header = ({ logoSrc, link1Text, link1Url, link2Text, link2Url }) => {
    const [isHoveredLink1, setIsHoveredLink1] = useState(false);
    const [isHoveredLink2, setIsHoveredLink2] = useState(false);
    
    const handleMouseEnterLink1 = () => {
        setIsHoveredLink1(true);
    };
    
    const handleMouseLeaveLink1 = () => {
        setIsHoveredLink1(false);
    };
    
    const handleMouseEnterLink2 = () => {
        setIsHoveredLink2(true);
    };
    
    const handleMouseLeaveLink2 = () => {
        setIsHoveredLink2(false);
    };
    
    return (
        <header className="header">
        <div className="logo">
        <img src={logoSrc} alt="Logo" className="logo-img" />
        </div>
        <div className="links">
        <a
        href={link1Url}
        className={`link ${isHoveredLink1 ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnterLink1}
        onMouseLeave={handleMouseLeaveLink1}
        >
        {link1Text}
        </a>
        <a
        href={link2Url}
        className={`link ${isHoveredLink2 ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnterLink2}
        onMouseLeave={handleMouseLeaveLink2}
        >
        {link2Text}
        </a>
        </div>
        </header>
        );
    };
    
    export default Header;
