import React from 'react';
import '../App.css';
import Header from './Header';
import HeadBanner from './HeadBanner';
import Collapse from './Collapse';

import arrowDownImg from '../assets/arrow_down.png';
import arrowUpImg from '../assets/arrow-up.png';

import Footer from './Footer';

function About() {
    
    const collapseData = [
        {
            id: 1,
            title: 'Fiabilité ',
            answer: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.',
        },
        {
            id: 2,
            title: 'Respect',
            answer: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
        },
        {
            id: 3,
            title: 'Service',
            answer: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
        },
        {
            id: 4,
            title: 'Sécurité',
            answer: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
        },
    ];
    
    const logoPath = 'img/LOGO_WHITE.png'; 
    
    return (
        <div class="about">
        <div class="main_contenair">
        <Header
        logoSrc="/img/LOGO.jpg"
        link1Text="Accueil"
        link1Url="/"
        link2Text="A Propos"
        link2Url="/a-propos"
        />
        
        <HeadBanner
        backgroundImage="/img/IMG_BANNER_ABOUT.jpg"
        />
        
        <Collapse
        collapseData={collapseData}
        arrowDownImg={arrowDownImg}
        arrowUpImg={arrowUpImg}
        />
        
        
        </div>

        
        <Footer logoSrc={logoPath} />
        </div>
        )
    }
    export default About;