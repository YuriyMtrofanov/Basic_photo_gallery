import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCurrentGallery, updateGallery } from "../store/galleries";
import { getAllPhotos } from "../store/photos";
import BackButton from "../components/buttons/backButton";
import PhotoCaldLinked from "../components/cards/photoCardLinked";

const Gallery = () => {
    const dispatch = useDispatch();
    const { galleryId } = useParams();
    const allPhotos = useSelector(getAllPhotos()); // массив из объектов фотографий
    const currentGallery = useSelector(getCurrentGallery(galleryId));
    const { photos, titlePhoto } = currentGallery; // id-шники фотографий

    function getPhotos() {
        if (photos) {
            return photos.map(photoId => {
                return allPhotos && allPhotos.find(photo => photo.id === photoId);
            });
        } else {
            return [];
        }
    };

    const galleryPhotos = getPhotos(); // массив из объектов с фотографиями для данной галереи

    const handleDelete = (id) => {
        const isExist = () => {
            return photos.find(item => item === id);
        };
        const editedPhotos = isExist && photos.filter(item => item !== id);
        const editedTitlePhoto = titlePhoto === id ? editedPhotos[0] : titlePhoto;
        const editedGallery = {
            ...currentGallery,
            photos: [...editedPhotos],
            titlePhoto: editedTitlePhoto
        };
        dispatch(updateGallery(editedGallery));
    };
    return (
        <div className="gallery-container">
            <div className="row">
                <h1>{currentGallery.name}</h1>
                {photos
                    ? (galleryPhotos.map((photo) => (
                        <PhotoCaldLinked
                            key={photo.id}
                            photoId={photo.id}
                            img={photo.URL}
                            onDelete={handleDelete}
                        />)))
                    : (<h1>В альбоме нет фотографий</h1>)
                }
            </div>
            <NavLink to="edit_album">
                <button className="btn btn-secondary m-2">Edit album</button>
            </NavLink>
            <BackButton
                endpoint={"/galleries"}
            />
        </div>
    );
};

export default Gallery;
