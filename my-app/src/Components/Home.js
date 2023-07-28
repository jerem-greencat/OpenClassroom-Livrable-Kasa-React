import React from 'react';
import '../App.css';
import Header from './Header';
import HeadBanner from './HeadBanner';

function Home() {
    return (
        <div>
        <Header
        logoSrc="/img/LOGO.jpg"
        link1Text="Accueil"
        link1Url="#header-link-1"
        link2Text="A Propos"
        link2Url="#header-link-2"
        />
        <HeadBanner
        backgroundImage="/img/IMG_BANNER.jpg"
        bannerText="Chez vous, partout et ailleurs"
        />
        {/* reste du contenu */}
        </div>
        );
    }
    
    export default Home;
