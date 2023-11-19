import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCurrentGallery, updateGallery } from "../store/galleries";
import { getAllPhotos } from "../store/photos";
import BackButton from "../components/buttons/backButton";
import DeleteButton from "../components/buttons/deleteButton";

const Gallery = () => {
    const dispatch = useDispatch();
    const { galleryId } = useParams();
    const currentGallery = useSelector(getCurrentGallery(galleryId));
    const { photos, titlePhoto } = currentGallery; // id-шники фотографий
    const allPhotos = useSelector(getAllPhotos()); // массив из объектов фотографий

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
                    ? (
                        galleryPhotos.map((photo) => (
                            <div key={photo.id} className="col-xlg-2 col-lg-3 col-md-6 col-sm-12">
                                <div className="photo-card">
                                    <NavLink className="nav-link" to={`${photo.id}`}>
                                        <img src={photo.URL} className="photo-card-img" alt="photo"/>
                                    </NavLink>
                                    <DeleteButton onDelete={() => handleDelete(photo.id)}/>
                                </div>
                            </div>
                        ))
                    )
                    : <h1>В альбоме нет фотографий</h1> // или "Loading"
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
