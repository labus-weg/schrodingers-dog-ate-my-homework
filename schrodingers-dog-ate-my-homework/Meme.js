// src/components/Meme.js
import React from 'react';

const Meme = ({ image, altText }) => {
    return (
        <div className="meme">
            <img src={image} alt={altText} />
        </div>
    );
};

export default Meme;
