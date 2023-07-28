import React, { useState } from 'react';

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
        <header style={headerStyle}>
        <div style={logoStyle}>
        <img src={logoSrc} alt="Logo" style={logoImgStyle} />
        </div>
        <div style={linksStyle}>
        <a
        href={link1Url}
        style={{ ...linkStyle, textDecoration: isHoveredLink1 ? 'underline' : 'none' }}
        onMouseEnter={handleMouseEnterLink1}
        onMouseLeave={handleMouseLeaveLink1}
        >
        {link1Text}
        </a>
        <a
        href={link2Url}
        style={{ ...linkStyle, textDecoration: isHoveredLink2 ? 'underline' : 'none' }}
        onMouseEnter={handleMouseEnterLink2}
        onMouseLeave={handleMouseLeaveLink2}
        >
        {link2Text}
        </a>
        </div>
        </header>
        );
    };
    
    
    const headerStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        background: 'white',
    };
    
    const logoStyle = {
        marginRight: '10px',
    };
    
    const logoImgStyle = {
        // Style du logo
    };
    
    const linksStyle = {
        display: 'flex',
        alignItems: 'center',
    };
    
    const linkStyle = {
        fontWeight: 500,
        fontSize: '24px',
        margin: '0 10px',
        textDecoration: 'none',
        color: '#FF6060',
    };
    
    export default Header;
