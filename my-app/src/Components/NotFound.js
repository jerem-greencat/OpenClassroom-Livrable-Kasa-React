import React, { useState } from 'react';
import '../App.css';
import Header from "./Header";

function NotFound() {
    
    const [isHoveredLink, setIsHoveredLink] = useState(false);
    
    const handleMouseEnterLink = () => {
        setIsHoveredLink(true);
    };
    
    const handleMouseLeaveLink = () => {
        setIsHoveredLink(false);
    };
    
    const numberStyle = {
        fontSize: '288px',
        fontWeight: '700',
        textAlign: 'center',
        color: '#FF6060',
        marginTop: '125px',
        marginBottom:'0',
    };
    
    const errorStyle = {
        color: '#FF6060',
        textAlign: 'center',
        fontSize: '36px',
        marginTop: '70px',
    };
    
    const linkStyle = {
        fontWeight: 500,
        fontSize: '18px',
        textDecoration: 'none',
        color: '#FF6060',
    };

    const linkContainer = {
        marginTop: '140px',
        textAlign: 'center',
    }
    
    return (
        <div>
        <div class="main_contenair">
        <Header
        logoSrc="/img/LOGO.jpg"
        link1Text="Accueil"
        link1Url="/"
        link2Text="A Propos"
        link2Url="/a-propos"
        />
        
        <p style={numberStyle}>404</p>
        <p style={errorStyle}>Oups! La page que vous demandez n'existe pas.</p>
        
        <p style={linkContainer}>
        <a 
        href="/"
        style={{ ...linkStyle, textDecoration: isHoveredLink ? 'underline' : 'none' }}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
        >
        Retourner sur la page d’accueil
        </a>
        </p>
        
        
        </div>
        </div>
        );
    }
    
    
    export default NotFound;