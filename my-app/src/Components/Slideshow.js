import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './slideshow.css'; 

const Slideshow = ({ images, arrowLeftImage, arrowRightImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
    
    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };
    
    return (
        <div className="slideshow-container">
        {images.length > 1 && (
            <>
            <img
            className="arrow left"
            src={arrowLeftImage}
            alt="Left Arrow"
            onClick={prevSlide}
            />
            <img
            className="arrow right"
            src={arrowRightImage}
            alt="Right Arrow"
            onClick={nextSlide}
            />
            </>
            )}
            <div className="slideshow">
            {images.map((image, index) => (
                <div
                key={index}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
                >
                <img className="slide_img" src={image} alt={`Slide ${index}`} />
                </div>
                ))}
                </div>
                {images.length > 1 && (
                    <div className="position-indicator">
                    {currentIndex + 1}/{images.length}
                    </div>
                    )}
                    </div>
                    );
                };
                
                Slideshow.propTypes = {
                    images: PropTypes.arrayOf(PropTypes.string).isRequired,
                    arrowLeftImage: PropTypes.string.isRequired,
                    arrowRightImage: PropTypes.string.isRequired,
                };
                
                export default Slideshow;
