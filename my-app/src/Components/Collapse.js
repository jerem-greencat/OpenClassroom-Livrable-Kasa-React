import React, { useState } from 'react';



const Collapse = ({ collapseData, arrowDownImg, arrowUpImg }) => {
    // État pour suivre les IDs des menus ouverts
    const [openMenuIds, setOpenMenuIds] = useState([]);
    
    // Fonction pour gérer le clic sur un menu
    const handleMenuClick = (id) => {
        setOpenMenuIds((prevOpenMenuIds) =>
        prevOpenMenuIds.includes(id)
        ? prevOpenMenuIds.filter((menuId) => menuId !== id)
        : [...prevOpenMenuIds, id]
        );
    };
    

    const aboutSlideStyle = {
        width: '40vw',
        maxWidth: '1023px',
        margin: '30px auto',
        borderRadius: '8px',
        height: '100%',
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
    
    // console.log(typeof collapseData.answer);

    const getType = (item) => {
        if (typeof item.answer === 'string') {
            console.log('String');
        } else {
            console.log('Object')
            console.log(typeof item.answer);
        }
    }


    return (
        <div>
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
                <div style={answerStyle}>

                    {getType(item)}

                {/* {item.answer.typeof === 'String' ? console.log('String') : console.log('Object')} */}


                    
                    {item.answer} {typeof item.answer}</div>
                )}
                </div>
                ))}
                </div>
                );
            };
            
            export default Collapse;
