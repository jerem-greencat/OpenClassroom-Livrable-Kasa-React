import React, { useState } from 'react';
import './notFound.css'; 

import Header from "./Header";

function NotFound() {
    const [isHoveredLink, setIsHoveredLink] = useState(false);
    
    const handleMouseEnterLink = () => {
        setIsHoveredLink(true);
    };
    
    const handleMouseLeaveLink = () => {
        setIsHoveredLink(false);
    };
    
    return (
        <div className="main_container">
        <Header
        logoSrc="/img/LOGO.jpg"
        link1Text="Accueil"
        link1Url="/"
        link2Text="A Propos"
        link2Url="/a-propos"
        />
        
        <p className="number">404</p>
        <p className="error">Oups! La page que vous demandez n'existe pas.</p>
        
        <p className="link_container">
        <a
        href="/"
        className={`link ${isHoveredLink ? 'underline' : ''}`}
        onMouseEnter={handleMouseEnterLink}
        onMouseLeave={handleMouseLeaveLink}
        >
        Retourner sur la page d’accueil
        </a>
        </p>
        </div>
        );
    }
    
    export default NotFound;
