import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import { getCurrentGallery } from "../store/galleries";
import { getAllPhotos } from "../store/photos";

const Gallery = () => {
    const { galleryId } = useParams();
    const allPhotos = useSelector(getAllPhotos());
    const { photos } = useSelector(getCurrentGallery(galleryId));
    function getPhotos() {
        return photos.map(photoId => {
            return allPhotos.find(photo => photo.id === photoId);
        });
    };
    const galleryPhotos = getPhotos();
    if (!allPhotos || !photos) return "Loading...";
    console.log("gallery photos", galleryPhotos);
    return (
        <div className="gallery-container">
            <div className="row">
                {galleryPhotos.map(photo => (
                    <div key={photo.id} className="col-xlg-2 col-lg-3 col-md-6 col-sm-12">
                        <div className="photo-card">
                            <NavLink className="nav-link" to={`${photo.id}`}>
                                <img src={photo.URL} className="photo-card-img" alt="photo"/>
                                <p>{photo.id}</p>
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
