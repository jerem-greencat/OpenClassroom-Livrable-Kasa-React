import React from 'react';
import '../App.css';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './Footer';
import NotFound from './NotFound';
import JsonData from '../locations.json';
import Tags from './Tags'; 

import arrowDownImg from '../assets/arrow_down.png';
import arrowUpImg from '../assets/arrow-up.png';
import Collapse from './Collapse';

function FicheLogement() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const selectedLocation = JsonData.find(location => location.id === id);
    
    if (!selectedLocation) {
        return <NotFound />;
    }

    const titleContainerStyle = {
        display : 'flex',
        justifyContent : 'space-between',
    }

    const ownerStyle = {
        display: 'flex',
        gap: '15px'
    }

    const ownerNameStyle = {
        margin: 'auto'
    }

    const ownerPictureStyle = {
        borderRadius: '50%',
        width: '64px',
        height: '64px',
        margin: 'auto'
    }
    
    const localisation = {
            fontWeight: '500',
            fontSize: '18px'
    };

    const collapseContainer = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flex : '1 1 auto'
    }
    
    const images = selectedLocation.pictures;
    const ownerName = selectedLocation.host.name;
    const ownerPicture = selectedLocation.host.picture;

    const tags = selectedLocation.tags;

    const collapseDataDesc = [
        {
            id: 1,
            title: 'Description',
            answer: selectedLocation.description
        }
    ]

    const collapseDataEquip = [
        {
            id: 1,
            title: 'Équipements',
            answer: selectedLocation.equipments
        }
    ]
    
    const logoPath = '/img/LOGO_WHITE.png'; 
    
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
        <Slideshow images={images} arrowLeftImage="/img/arrow_left.png" arrowRightImage="/img/arrow_right.png" />
        <div style={titleContainerStyle}>
        <h1>{selectedLocation.title}</h1>
        <div style={ownerStyle}>
        <p style={ownerNameStyle}>{ownerName}</p>
        <img style={ownerPictureStyle} src={ownerPicture} alt={`${ownerName}'s profile`} className='owner-picture' />
        </div>
        </div>
        <p style={localisation}>{selectedLocation.location}</p>
        <Tags
        tags={tags}
        rate={parseInt(selectedLocation.rating)}
        starFilledImg="/img/star.jpg" 
        starEmptyImg="/img/star-empty.jpg" 
        />
        <div style={collapseContainer}>
        <Collapse
        collapseData={collapseDataDesc}
        arrowDownImg={arrowDownImg}
        arrowUpImg={arrowUpImg}
        />
        <Collapse
        collapseData={collapseDataEquip}
        arrowDownImg={arrowDownImg}
        arrowUpImg={arrowUpImg}
        />
        </div>
        </div>
        <Footer logoSrc={logoPath} />
        </div>
        );
    }
    
    export default FicheLogement;
