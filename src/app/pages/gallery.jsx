import React from "react";
import { useParams } from "react-router-dom";

const Gallery = () => {
    const { galleryId } = useParams();
    return (
        <div className="gallery-container">
            <h1>{`Gallery ${galleryId}`}</h1>
        </div>
        // фотографии будут отображаться в модальном окне
    );
};

export default Gallery;
