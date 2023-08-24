import React from 'react';
import '../App.css';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './Footer';

import NotFound from './NotFound';

import JsonData from '../locations.json';

function FicheLogement() {
    
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    console.log(id);

    const selectedLocation = JsonData.find(location => location.id === id);

    if (!selectedLocation) {
        return (
            <NotFound/>
        )
    }


    const images = selectedLocation.pictures;

    const logoPath = 'img/LOGO_WHITE.png'; 
    
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
        <Slideshow images={images} arrowLeftImage="/img/arrow_left.png" arrowRightImage="/img/arrow_right.png"/>
        </div>
        <Footer logoSrc={logoPath}/>
        </div>
        );
    }

    export default FicheLogement;