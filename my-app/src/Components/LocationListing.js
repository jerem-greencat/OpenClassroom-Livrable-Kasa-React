import React from 'react';
import JsonData from '../locations.json';
import './locationListing.css'; 

function DataProcess() {
    return (
        <div className="location-listing"> 
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
