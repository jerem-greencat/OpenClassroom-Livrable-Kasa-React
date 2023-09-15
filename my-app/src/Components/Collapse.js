import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './collapse.css'; 

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
    
    const getType = (item) => {
        if (typeof item.answer === 'string') {
            return <div>{item.answer}</div>;
        } else {
            return (
                <ul className="list-style">
                {item.answer.map((el, index) => (
                    <li className="list-element" key={index}>
                    {el}
                    </li>
                    ))}
                    </ul>
                    );
                }
            };
            
            return (
                <div>
                {collapseData.map((item) => (
                    <div className="about-slide" key={item.id}>
                    <div className="title" onClick={() => handleMenuClick(item.id)}>
                    {item.title}
                    <img
                    src={openMenuIds.includes(item.id) ? arrowUpImg : arrowDownImg}
                    alt="Flèche"
                    className="arrow"
                    />
                    </div>
                    {openMenuIds.includes(item.id) && (
                        <div className="answer">{getType(item)}</div>
                        )}
                        </div>
                        ))}
                        </div>
                        );
                    };
                    
                    Collapse.propTypes = {
                        collapseData: PropTypes.arrayOf(PropTypes.object).isRequired,
                        arrowDownImg: PropTypes.string.isRequired,
                        arrowUpImg: PropTypes.string.isRequired,
                    };
                    
                    export default Collapse;
