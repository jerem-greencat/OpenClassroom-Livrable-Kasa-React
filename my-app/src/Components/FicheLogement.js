import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Slideshow from './Slideshow';
import Footer from './Footer';
import NotFound from './NotFound';
import JsonData from '../locations.json';
import Tags from './Tags';
import arrowDownImg from '../assets/arrow_down.png';
import arrowUpImg from '../assets/arrow-up.png';
import Collapse from './Collapse';

import '../App.css';
import './ficheLogement.css'; 

function FicheLogement() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    const selectedLocation = JsonData.find((location) => location.id === id);
    
    if (!selectedLocation) {
        return <NotFound />;
    }
    
    const images = selectedLocation.pictures;
    const ownerName = selectedLocation.host.name;
    const ownerNameParts = ownerName.split(' ');
    const firstPart = ownerNameParts[0];
    const restPart = ownerNameParts.slice(1).join(' ');
    const ownerPicture = selectedLocation.host.picture;
    const tags = selectedLocation.tags;
    
    const collapseDataDesc = [
        {
            id: 1,
            title: 'Description',
            answer: selectedLocation.description,
        },
    ];
    
    const collapseDataEquip = [
        {
            id: 1,
            title: 'Équipements',
            answer: selectedLocation.equipments,
        },
    ];
    
    const logoPath = '/img/LOGO_WHITE.png';
    
    return (
        <div>
        
        <div className="main_container">
        <Header
        logoSrc="/img/LOGO.jpg"
        link1Text="Accueil"
        link1Url="/"
        link2Text="A Propos"
        link2Url="/a-propos"
        />
        <Slideshow
        images={images}
        arrowLeftImage="/img/arrow_left.png"
        arrowRightImage="/img/arrow_right.png"
        />
        
        <div className="fiche_head_container">
        <div className="left_head">
        <h1 className="fiche_title">{selectedLocation.title}</h1>
        <p className="localisation">{selectedLocation.location}</p>
        <div className='tag_container'>
        {tags.map((tag, index) => (
            <span key={index} className='tag'>{tag}</span>
            ))}
            </div>
            
            </div>
            <div className='right_head'>
            <div className="owner">
            <p className="owner-name">
            {firstPart}
            <br />
            {restPart}
            </p>
            <img
            className="owner-picture"
            src={ownerPicture}
            alt={`${ownerName}'s profile`}
            />
            </div>
            <Tags
            // tags={tags}
            rate={parseInt(selectedLocation.rating)}
            starFilledImg="/img/star.jpg"
            starEmptyImg="/img/star-empty.jpg"
            />
            </div>
            </div>
            
            <div className="collapse-container">
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
        
        FicheLogement.propTypes = {
            images: PropTypes.arrayOf(PropTypes.string).isRequired,
            arrowLeftImage: PropTypes.string.isRequired,
            arrowRightImage: PropTypes.string.isRequired,
        };
        
        export default FicheLogement;
