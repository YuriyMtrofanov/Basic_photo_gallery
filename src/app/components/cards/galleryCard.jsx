import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getAllPhotos } from "../../store/photos";
import DefaultGalleryCerd from "./defaultGalleryCard";

const GalleryCard = ({
    name,
    photos,
    titlePhoto
}) => {
    const allPhotos = useSelector(getAllPhotos());
    const getTitlePhoto = (id) => {
        const titlePhotoURL = allPhotos.find(item => item.id === id).URL;
        return titlePhotoURL;
    };
    return (
        <>
            {photos || titlePhoto
                ? (<div className="gallery-card text-light">
                    <img src={getTitlePhoto(titlePhoto)} className="gallery-card-img" alt="card-img"/>
                    <div className="gallery-card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{[...photos].length} фотографий</p>
                    </div>
                </div>)
                : (<DefaultGalleryCerd/>) // затычка
            }
        </>
    );
};

GalleryCard.propTypes = {
    name: PropTypes.string,
    photos: PropTypes.array,
    titlePhoto: PropTypes.string
};

export default GalleryCard;
