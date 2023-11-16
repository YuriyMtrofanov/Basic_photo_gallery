import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCurrentGallery } from "../store/galleries";
import { getAllPhotos } from "../store/photos";

const Gallery = () => {
    const { galleryId } = useParams();
    const allPhotos = useSelector(getAllPhotos());
    const currentGallery = useSelector(getCurrentGallery(galleryId));
    const { photos } = currentGallery;
    function getPhotos() {
        return photos.map(photoId => {
            return allPhotos.find(photo => photo.id === photoId);
        });
    };
    const galleryPhotos = getPhotos();
    if (!allPhotos || !photos) return "Loading...";
    return (
        <div className="gallery-container">
            <div className="row">
                <h1>{currentGallery.label}</h1>
                {photos
                    ? (galleryPhotos.map((photo) => (
                        <div key={photo.id} className="col-xlg-2 col-lg-3 col-md-6 col-sm-12">
                            <div className="photo-card">
                                <NavLink className="nav-link" to={`${photo.id}`}>
                                    <img src={photo.URL} className="photo-card-img" alt="photo"/>
                                    <p>{photo.id}</p>
                                </NavLink>
                            </div>
                        </div>
                    )))
                    : "Loading"
                }
            </div>
            {/* <NavLink to="add_photo">
                <button className="btn btn-secondary">Add photo</button>
            </NavLink> */}
            <NavLink to="edit_album">
                <button className="btn btn-secondary">Edit album</button>
            </NavLink>
        </div>
    );
};

export default Gallery;
