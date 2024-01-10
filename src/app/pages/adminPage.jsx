import React from "react";
import { useSelector } from "react-redux";
import { getGalleriesList } from "../store/galleries";
import { getAllPhotos } from "../store/photos";
import WrappedPhotosList from "../components/common/wrappedPhotosList";

const AdminPage = () => {
    const galleries = useSelector(getGalleriesList());
    const photos = useSelector(getAllPhotos());
    if (!galleries || !photos) return "Loading...";
    return (
        <div className="gallery-container">
            <h1 className="admin-container">Admin Page</h1>
            <div className="row">
                {galleries && galleries.map((gallery) => (
                    <div className="col-12 text-center" key={gallery.id}>
                        <WrappedPhotosList galleryId={gallery.id}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminPage;
