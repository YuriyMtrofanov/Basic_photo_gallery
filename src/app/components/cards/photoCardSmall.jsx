import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCurrentPhoto } from "../../store/photos";
const PhotoCardSmall = ({
    getSelectedPhoto,
    photoId
}) => {
    const currentPhoto = useSelector(getCurrentPhoto(photoId));
    const [isSelected, setSelected] = useState();
    const handleChange = () => {
        getSelectedPhoto(photoId);
        !isSelected ? setSelected("selected") : setSelected("");
    };

    const getClassName = () => {
        return `gallery-card${isSelected ? "-selected" : ""}`;
    };
    if (!currentPhoto) return "...Loading";
    return (
        <div className={getClassName()} onClick={() => handleChange()}>
            <img src={currentPhoto.URL} className="photo-card-img" alt="photo"/>
        </div>
    );
};

PhotoCardSmall.propTypes = {
    getSelectedPhoto: PropTypes.func,
    photoId: PropTypes.string
};

export default PhotoCardSmall;
