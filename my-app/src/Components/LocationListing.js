import React from 'react';
import JsonData from '../locations.json';
import './locationListing.css'; // Importez le fichier CSS

function DataProcess() {
    return (
        <div className="location-listing"> {/* Utilisez la classe CSS pour le conteneur */}
        {JsonData.map((item) => (
            <a className="location-card" key={item.id} href={"fiche?id=" + item.id}>
            <img src={item.cover} alt={item.title} className="location-image" />
            <p className="location-title">{item.title}</p>
            </a>
            ))}
            </div>
            );
        }
        
        export default DataProcess;
