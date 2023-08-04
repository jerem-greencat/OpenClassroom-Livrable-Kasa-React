import React from 'react';

const LocationListing = ({ locationsData}) => {
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
        fontWeight:'500',
        width: '300px',
    };
    
    return (
        <div style={{ ...locationListingStyle }}>
        {locationsData.map((location) => (
            <div style={{ ...locationCardStyle }} key={location.id}>
            <img src={location.imageUrl} alt={location.title} style={locationImageStyle} />
            <p style={locationTitleStyle}>{location.title}</p>
            </div>
            ))}
            </div>
            );
        };
        
        export default LocationListing;
