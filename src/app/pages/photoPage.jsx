import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCurrentPhoto } from "../store/photos";
import BackButton from "../components/buttons/backButton";
import PhotoCardLarge from "../components/cards/photoCardLarge";

const PhotoPage = () => {
    const { photoId } = useParams();
    const currentPhoto = useSelector(getCurrentPhoto(photoId));
    return (
        <div className="photo-container">
            <PhotoCardLarge image={currentPhoto.URL} id={photoId}/>
            <BackButton/>
        </div>
    );
};

export default PhotoPage;
