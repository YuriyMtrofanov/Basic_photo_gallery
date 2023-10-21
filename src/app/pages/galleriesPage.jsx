import React from "react";
import { getGalleriesList } from "../store/galleries";
import {
    useSelector
} from "react-redux";
import {
    getAllPhotos
} from "../store/photos";
import { NavLink } from "react-router-dom";

const GalleriesPage = () => {
    // const dispatch = useDispatch();
    const galleries = useSelector(getGalleriesList());
    const photos = useSelector(getAllPhotos());
    const getTitlePhoto = (id) => {
        return photos.find(photo => photo.id === id).URL;
    };
    if (!galleries || !photos) return "Loading...";
    return (
        <div className="gallery-container">
            <div className="row">
                {galleries.map(gallery => (
                    <div key={gallery.id} className="col-xlg-3 col-lg-4 col-md-6 col-sm-12">
                        <div className="gallery-card">
                            <img src={getTitlePhoto(gallery.tittlePhoto)} className="card-img-top" alt="card-img"/>
                            <div className="gallery-card-body">
                                <h5 className="card-title">{gallery.label}</h5>
                                <p className="card-text">{gallery.title}</p>
                                <NavLink className="nav-link text-light" to={gallery.id}>
                                    <p role="button" className="text-secondary">Go to photos</p>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GalleriesPage;
