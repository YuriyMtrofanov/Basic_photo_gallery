import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../buttons/deleteButton";
import PropTypes from "prop-types";
import { getCurrentGallery, updateGallery } from "../../store/galleries";
import { getUserAccountType } from "../../store/users";

const PhotoCardLarge = ({ image, id }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { galleryId } = useParams();
    const currentGallery = useSelector(getCurrentGallery(galleryId));
    const { photos, titlePhoto } = currentGallery;
    const isAdmin = useSelector(getUserAccountType());

    const handleDelete = () => {
        const editedPhotos = photos.filter(item => item !== id);
        const editedTitlePhoto = titlePhoto === id ? editedPhotos[0] : titlePhoto;
        const editedGallery = {
            ...currentGallery,
            photos: [...editedPhotos],
            titlePhoto: editedTitlePhoto
        };
        try {
            dispatch(updateGallery(editedGallery));
        } catch (error) {
            console.error(error.message);
        } finally {
            navigate(-1);
        }
    };
    return (
        <div className="photo-card">
            <img
                className="photo-card-img"
                src={image}
                alt="photo"
            />
            {isAdmin === "admin" && <DeleteButton onDelete={handleDelete}/>}
        </div>
    );
};

PhotoCardLarge.propTypes = {
    image: PropTypes.string,
    id: PropTypes.string
};

export default PhotoCardLarge;
