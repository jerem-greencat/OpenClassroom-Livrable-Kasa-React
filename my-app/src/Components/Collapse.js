import React, { useState } from 'react';



const Collapse = ({ collapseData, arrowDownImg, arrowUpImg }) => {
    // État pour suivre les IDs des menus ouverts
    const [openMenuIds, setOpenMenuIds] = useState([]);
    
    // Fonction pour gérer le clic sur un menu
    const handleMenuClick = (id) => {
        // Vérifier si l'ID du menu est déjà dans le tableau openMenuIds
        // Si oui, le menu est déjà ouvert, nous le fermons en le retirant du tableau
        // Sinon, le menu est fermé, nous l'ouvrons en l'ajoutant au tableau
        setOpenMenuIds((prevOpenMenuIds) =>
        prevOpenMenuIds.includes(id)
        ? prevOpenMenuIds.filter((menuId) => menuId !== id)
        : [...prevOpenMenuIds, id]
        );
    };
    
    const aboutStyle = {
        width: '80%',
        maxWidth: '1023px',
        margin: '30px auto',
        borderRadius: '8px',
    };

    const aboutSlideStyle = {
        marginBottom: '35px',
    }
    
    const titleStyle = {
        cursor: 'pointer',
        fontWeight: 'bold',
        backgroundColor: '#FF6060',
        color: 'white',
        height: '47px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '20px',
        borderRadius: '10px',
    };
    
    const arrowStyle = {
        width: '32px',
        height: '32px',
        paddingRight: '20px'
    };
    
    const answerStyle = {
        backgroundColor: '#F6F6F6',
        fontSize: '24px',
        color: '#FF6060',
        padding: '18px',
        borderRadius: '10px',
    };
    
    return (
        <div style={aboutStyle}>
        {collapseData.map((item) => (
            <div style={aboutSlideStyle} key={item.id}>
            <div style={titleStyle} onClick={() => handleMenuClick(item.id)}>
            {item.title}
            <img
            src={openMenuIds.includes(item.id) ? arrowUpImg : arrowDownImg}
            alt="Flèche"
            style={arrowStyle}
            />
            </div>
            {openMenuIds.includes(item.id) && (
                <div style={answerStyle}>{item.answer}</div>
                )}
                </div>
                ))}
                </div>
                );
            };
            
            export default Collapse;
