import React from 'react';

const tagAndRate = {
    display: 'flex',
    justifyContent : 'space-between'

}

const tagContainer = {
    display : 'flex',
    gap: '5px',
    alignItems : 'center'
}

const tagStyle = {
    background : '#FF6060',
    padding: '5px 35px 1px 35px',
    height: '25px',
    color: 'white',
    borderRadius : '10px'
};

const starStyle = {
    width: '36px', // Ajustez la taille des étoiles selon vos besoins
    height: '36px',
    marginRight: '5px', // Espacement entre les étoiles
};

function Tags({ tags, rate, starFilledImg, starEmptyImg }) {
    const maxStars = 5; 
    
    return (
        <div style={tagAndRate}>
        <div style={tagContainer}>
        {tags.map((tag, index) => (
            <span key={index} style={tagStyle} className="tag">
            {tag}
            </span>
            ))}
            </div>
            <div className='rate_container'>
            {Array.from({ length: maxStars }).map((_, index) => (
                <img
                key={index}
                src={index < rate ? starFilledImg : starEmptyImg}
                alt={index < rate ? 'filled star' : 'empty star'}
                style={starStyle}
                />
                ))}
                </div>
                </div>
                );
            }
            
            export default Tags;
