import React from 'react';
import './../../index.css';

interface PhotoProps {
    imagePath: string;
    altText: string;
}

const ItemPhoto:React.FC<PhotoProps> = ({ imagePath, altText }) => {
    return (
<div className="w-full hover:scale-110">
    <img src={imagePath} alt={altText} />
</div>
    )
};


export default ItemPhoto;