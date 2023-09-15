import React from 'react';

const tagAndRate = {
    display: 'flex',
    justifyContent : 'space-between'

}

function Tags({ tags, rate, starFilledImg, starEmptyImg }) {
    const maxStars = 5; 
    
    return (
        <div className="rate_box" style={tagAndRate}>

            <div className='rate_container'>
            {Array.from({ length: maxStars }).map((_, index) => (
                <img
                key={index}
                src={index < rate ? starFilledImg : starEmptyImg}
                alt={index < rate ? 'filled star' : 'empty star'}
                className='star'
                />
                ))}
                </div>
                </div>
                );
            }
            
            export default Tags;
