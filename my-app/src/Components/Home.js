import React from 'react';
import '../App.css';
import Header from './Header';
import HeadBanner from './HeadBanner';
import LocationListing from './LocationListing';
import Footer from './Footer';

function Home() {
    
    const locationsData = [
        {
            id: "c67ab8a7",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg',
            title: 'Appartement cosy',
        },
        {
            id: "b9123946",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg',
            title: 'Magnifique appartement proche Canal Saint Martin',
        },
        {
            id:  "46d188c5",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg',
            title: 'Studio de charme - Buttes Chaumont',
            description: 'Description de la location 3',
        },
        {
            id: "7af00cd6",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg',
            title: 'Nid douillet au coeur du 11ème',
        },
        {
            id: "0979876d",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg',
            title: 'Appartement de Standing - 10e',
        },
        {
            id: "f72a452f",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-5-1.jpg',
            title: "Studio d'artiste",
        },
        {
            id: "b4c67936",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-6-1.jpg',
            title: 'Cheap - Studio 18ème',
        },
        {
            id: "bc6f7112",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg',
            title: 'Superbe appartement proche Tour Eiffel',
        },
        {
            id: "cb2f9222",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-8-1.jpg",
            title: "Suite familiale",
        },
        {
            id: "d60ca600",
            imageUrl: 'https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-9-1.jpg',
            title: "Appartement moderne sur parc",
        },
        {
            id: "2cf259e1",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-10-1.jpg",
            title:  "Charmant Studio Marais",
        },
        {
            id: "5323c29b",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-11-3.jpg",
            title: "Studio fonctionnel République",
        },
        {
            id: "af6d2d48",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-12-1.jpg",
            title: "Bungalow dans la forêt",
        },
        {
            id:  "7cbb378e",
            imageUrl:  "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-13-2.jpg",
            title:"Grande Maison proche banlieue",
        },
        {
            id: "ba55a0cc",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-14-1.jpg",
            title: "Maison T5 - Le Vésinet",
        },
        {
            id: "1e181317",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-15-1.jpg",
            title: "Loft de Luxe à la Défense",
        },
        {
            id: "1e180563",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-16-1.jpg",
            title: "Charmant apt aux portes de Paris",
        },
        {
            id: "2139a317",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-17-1.jpg",
            title:  "Cheap - Chambre Paris 20",
        },
        {
            id: "6ff132c6",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-18-1.jpg",
            title: "Charmant studio",
        },
        {
            id: "cb02d69b",
            imageUrl: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-19-1.jpg",
            title: "Magnifique appartement Rivoli",
        }
    ];
    

    
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
        <HeadBanner
        backgroundImage="/img/IMG_BANNER.jpg"
        bannerText="Chez vous, partout et ailleurs"
        />
        
        <div>
        <LocationListing locationsData={locationsData}  />
        </div>
        </div>
        <Footer logoSrc={logoPath} />
        </div>
        );
    }
    
    export default Home;
