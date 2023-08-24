import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const Slideshow = ({ images, arrowLeftImage, arrowRightImage }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const slideshowStyles = `
        .slideshow-container {
            position: relative;
            width: 100%; 
            margin: 0 auto; 
            margin-top: 100px;
        }

        .arrows {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }

        .arrow {
            cursor: pointer;
            font-size: 2rem;
        }

        .arrow.left {
            left: 25px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }

        .arrow.right {
            right: 25px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            z-index: 1;
        }

        .slideshow {
            display: flex;
            overflow: hidden;
        }

        .slide {
            display: none;
            width : 100%;
        }

        .slide.active {
            display: block;
        }

        img.slide_img {
            width: 100%;
            height: 415px; /* Hauteur fixe */
            object-fit: cover;
            border-radius: 25px
        
        }

        .position-indicator {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: #fff;
            padding: 5px 10px;
            border-radius: 20px;
        }
    `;

    return (
        <div>
            <style>{slideshowStyles}</style>
            <div className="slideshow-container">
                {images.length > 1 && (
                        <><img
                        className="arrow left"
                        src={arrowLeftImage}
                        alt="Left Arrow"
                        onClick={prevSlide} /><img
                            className="arrow right"
                            src={arrowRightImage}
                            alt="Right Arrow"
                            onClick={nextSlide} /></>
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
        </div>
    );
};

Slideshow.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    arrowLeftImage: PropTypes.string.isRequired,
    arrowRightImage: PropTypes.string.isRequired,
};

export default Slideshow;
