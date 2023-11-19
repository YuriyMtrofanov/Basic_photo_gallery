import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCurrentPhoto } from "../store/photos";
import BackButton from "../components/buttons/backButton";
const PhotoPage = () => {
    const { photoId } = useParams();
    const currentPhoto = useSelector(getCurrentPhoto(photoId));
    return (
        <div className="photo-container">
            <div className="photo-card">
                <img
                    className="photo-card-img"
                    src={currentPhoto.URL}
                    alt="photo"
                />
            </div>
            <BackButton/>
        </div>
    );
};

export default PhotoPage;
