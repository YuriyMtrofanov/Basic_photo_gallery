import React from "react";
import { useParams } from "react-router-dom";

const Gallery = () => {
    const { galleryId } = useParams();
    return (
        <h1 className="gallery-container">{`Gallery ${galleryId}`}</h1>
        // фотографии будут отображаться в модальном окне
    );
};

export default Gallery;
