import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCurrentPhoto } from "../store/photos";
const PhotoPage = () => {
    const { photoId } = useParams();
    console.log(photoId);
    const currentPhoto = useSelector(getCurrentPhoto(photoId));
    console.log("currentPhoto", currentPhoto);
    return (
        <div className="photo-container">
            <div className="photo-card">
                <img
                    className="photo-card-img"
                    src={currentPhoto.URL}
                    alt="photo"
                />
            </div>
        </div>
    );
};

export default PhotoPage;