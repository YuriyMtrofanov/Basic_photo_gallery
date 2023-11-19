import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DeleteButton from "../buttons/deleteButton";
import PropTypes from "prop-types";
// import { deletePhoto } from "../../store/photos";
// import { getCurrentGallery } from "../../store/galleries";

const PhotoCardLarge = ({ image, id }) => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const currentGallery = useSelector(getCurrentGallery(id));
    // const { photos, titlePhoto } = currentGallery;
    useEffect(() => {
        // console.log("photos", photos);
        // console.log("titlePhoto", titlePhoto);
    }, []);
    const handleDelete = async () => {
        try {
            // dispatch(deletePhoto(id));
        } catch (error) {
            console.error(error);
        } finally {
            navigate(`/galleries/${id}`);
        }
    };
    return (
        <div className="photo-card">
            <img
                className="photo-card-img"
                src={image}
                alt="photo"
            />
            <DeleteButton onDelete={handleDelete}/>
        </div>
    );
};

PhotoCardLarge.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string
};

export default PhotoCardLarge;
