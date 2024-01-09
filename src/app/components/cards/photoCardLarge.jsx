import React from "react";
import { useSelector } from "react-redux";
import DeleteButton from "../buttons/deleteButton";
import PropTypes from "prop-types";
import { getUserAccountType } from "../../store/users";

const PhotoCardLarge = ({ img, photoId, onDelete }) => {
    const isAdmin = useSelector(getUserAccountType());
    const handleDelete = (photoId) => {
        onDelete(photoId);
    };

    return (
        <div className="photo-card">
            <img
                className="photo-card-img"
                src={img}
                alt="photo"
            />
            {isAdmin === "admin" && <h5><DeleteButton onDelete={() => handleDelete(photoId)}/></h5>}
        </div>
    );
};

PhotoCardLarge.propTypes = {
    img: PropTypes.string,
    photoId: PropTypes.string,
    onDelete: PropTypes.func
};

export default PhotoCardLarge;
