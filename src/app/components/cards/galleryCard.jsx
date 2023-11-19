import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getAllPhotos } from "../../store/photos";

const GalleryCard = ({
    name,
    photos,
    titlePhoto
}) => {
    const allPhotos = useSelector(getAllPhotos());
    const getTitlePhoto = (id) => {
        return allPhotos.find(item => item.id === id).URL;
    };
    // console.log("photos", photos[0]);
    return (
        <div className="gallery-card text-light">
            <img src={getTitlePhoto(titlePhoto)} className="gallery-card-img" alt="card-img"/>
            <div className="gallery-card-body">
                <h5 className="card-title">{ name }</h5>
                <p className="card-text">{[...photos].length} фотографий</p>
            </div>
        </div>
    );
};

GalleryCard.propTypes = {
    name: PropTypes.string,
    photos: PropTypes.array,
    titlePhoto: PropTypes.string
};

export default GalleryCard;
