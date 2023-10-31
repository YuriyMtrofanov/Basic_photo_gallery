import React from "react";
import { getGalleriesList } from "../store/galleries";
import {
    useSelector
} from "react-redux";
import {
    getAllPhotos
} from "../store/photos";
import { NavLink } from "react-router-dom";
import DefaultGalleryCerd from "../components/cards/defaultGalleryCard";
import GalleryCard from "../components/cards/galleryCard";

const GalleriesPage = () => {
    const galleries = useSelector(getGalleriesList());
    const photos = useSelector(getAllPhotos());

    if (!galleries || !photos) return "Loading...";
    return (
        <div className="gallery-container">
            <div className="row">
                {galleries.map(gallery => (
                    <div key={gallery.id} className="col-xlg-2 col-lg-3 col-md-6 col-sm-12">
                        <NavLink className="nav-link" to={gallery.id}>
                            <GalleryCard
                                name={gallery.name}
                                photos={gallery.photos}
                                titlePhoto={gallery.titlePhoto}
                            />
                        </NavLink>
                    </div>
                ))}
                <div className="col-xlg-2 col-lg-3 col-md-6 col-sm-12">
                    <NavLink className="nav-link" to="create_album" placeholder="Add new album">
                        <DefaultGalleryCerd/>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default GalleriesPage;
