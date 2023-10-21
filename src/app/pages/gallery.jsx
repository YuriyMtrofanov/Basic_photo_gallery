import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
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
                    <div key={photo.id} className="col-xlg-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="photo-card">
                            <img src={photo.URL} className="card-img-top" alt="photo"/>
                            {/* <div className="photo-card-body">
                                <h5 className="card-title">{photo.label}</h5>
                                <p className="card-text">{photo.title}</p>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        // фотографии будут отображаться в модальном окне
    );
};

export default Gallery;
