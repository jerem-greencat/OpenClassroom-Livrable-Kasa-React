import React  from 'react';

import JsonData from '../locations.json';

function DataProcess() {
    const locationListingStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '10px',
        marginTop: '45px',
        backgroundColor: '#F6F6F6',
        padding: '56px 50px',
        borderRadius: '25px',
    };
    
    const locationCardStyle = {
        margin: 'auto',
        marginBottom: '50px',
        position: 'relative',
        width: '340px',
        height: '340px',
    };
    
    const locationImageStyle = {
        borderRadius: '8px',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };
    
    const locationTitleStyle = {
        position: 'absolute',
        top: '268px',
        left: '20px',
        color: '#fff',
        fontSize: '18px',
        fontWeight: '500',
        width: '300px',
    };
    
    return(
        <div style={locationListingStyle}>
        {JsonData.map((item) => (
            <a style={locationCardStyle} key={item.id} href={item.id}>
            <img src={item.cover} alt={item.title} style={locationImageStyle} />
            <p style={locationTitleStyle}>{item.title}</p>
            </a>
            ))}
            </div>
            )
            
        }

        export default DataProcess;