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
                    <div key={gallery.id} className="col-xlg-2 col-lg-3 col-md-6 col-sm-12">
                        <NavLink className="nav-link" to={gallery.id}>
                            <div className="gallery-card text-light">
                                <img src={getTitlePhoto(gallery.tittlePhoto)} className="gallery-card-img" alt="card-img"/>
                                <div className="gallery-card-body">
                                    <h5 className="card-title">{gallery.label}</h5>
                                    <p className="card-text">{[...gallery.photos].length} фотографий</p>
                                </div>
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
            <NavLink className="nav-link" to="create_album">
                <button className="btn btn-secondary">Create album</button>
            </NavLink>
        </div>
    );
};

export default GalleriesPage;
