import React from 'react';
import '../App.css';
import Header from './Header';
import HeadBanner from './HeadBanner';
import LocationListing from './LocationListing';
import Footer from './Footer';

function Home() {
    

    
    const logoPath = 'img/LOGO_WHITE.png'; 
    
    return (
        <div>
        <div className="main_contenair">
        <Header
        logoSrc="/img/LOGO.jpg"
        link1Text="Accueil"
        link1Url="/"
        link2Text="A Propos"
        link2Url="/a-propos"
        />
        <HeadBanner
        backgroundImage="/img/IMG_BANNER.jpg"
        bannerText="Chez vous, partout et ailleurs"
        />
        
        <div>
        <LocationListing />
        </div>
        </div>
        <Footer logoSrc={logoPath} />
        </div>
        );
    }
    
    export default Home;
