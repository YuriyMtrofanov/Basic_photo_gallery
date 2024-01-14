import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getCurrentPhoto } from "../../store/photos";
import DeleteButton from "../buttons/deleteButton";
const PhotoCardSmall = ({
    getSelectedPhoto,
    photoId,
    isAdmin = "user",
    onDelete
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
        <div className={getClassName()} onClick={getSelectedPhoto && (() => handleChange())}>
            <img src={currentPhoto.URL} className="photo-card-img" alt="photo"/>
            {isAdmin === "admin" &&
                <DeleteButton
                    onDelete={() => onDelete(photoId)}
                />
            }
        </div>
    );
};

PhotoCardSmall.propTypes = {
    getSelectedPhoto: PropTypes.func,
    photoId: PropTypes.string,
    isAdmin: PropTypes.string,
    onDelete: PropTypes.func
};

export default PhotoCardSmall;
