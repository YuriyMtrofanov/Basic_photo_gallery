import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { getUserAccountType } from "../../store/users";
import { NavLink } from "react-router-dom";
import DeleteButton from "../buttons/deleteButton";

const PhotoCaldLinked = ({
    photoId,
    img,
    onDelete
}) => {
    const isAdmin = useSelector(getUserAccountType());
    const handleDelete = (photoId) => {
        onDelete(photoId);
    };
    return (
        <div className="col-xlg-2 col-lg-3 col-md-6 col-sm-12">
            <div className="photo-card">
                <NavLink className="nav-link" to={`${photoId}`}>
                    <img src={img} className="photo-card-img" alt="photo"/>
                </NavLink>
                {isAdmin === "admin" && <DeleteButton onDelete={() => handleDelete(photoId)}/>}
            </div>
        </div>
    );
};

PhotoCaldLinked.propTypes = {
    photoId: PropTypes.string,
    img: PropTypes.string,
    onDelete: PropTypes.func
};

export default PhotoCaldLinked;
