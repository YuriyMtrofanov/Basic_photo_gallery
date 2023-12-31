import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { getCurrentPhoto } from "../store/photos";
import BackButton from "../components/buttons/backButton";
import PhotoCardLarge from "../components/cards/photoCardLarge";
import { getCurrentGallery, updateGallery } from "../store/galleries";

const PhotoPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { photoId } = useParams();
    const currentPhoto = useSelector(getCurrentPhoto(photoId));
    const { galleryId } = useParams();
    const currentGallery = useSelector(getCurrentGallery(galleryId));
    const { photos, titlePhoto } = currentGallery;

    const handleDelete = ({ id }) => {
        const editedPhotos = photos.filter(item => item !== id);
        const editedTitlePhoto = titlePhoto === id ? editedPhotos[0] : titlePhoto;
        const editedGallery = {
            ...currentGallery,
            photos: [...editedPhotos],
            titlePhoto: editedTitlePhoto
        };
        dispatch(updateGallery(editedGallery));
        navigate(-1);
    };

    return (
        <div className="photo-container">
            <PhotoCardLarge
                img={currentPhoto.URL}
                photoId={photoId}
                onDelete={handleDelete}
            />
            <BackButton/>
        </div>
    );
};

export default PhotoPage;
