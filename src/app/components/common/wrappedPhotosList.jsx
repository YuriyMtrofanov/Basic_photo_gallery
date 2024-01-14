import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteGallery, getCurrentGallery, updateGallery } from "../../store/galleries";
import PropTypes from "prop-types";
import PhotoCardSmall from "../cards/photoCardSmall";
import { getCurrentUser } from "../../store/users";
import DeleteButton from "../buttons/deleteButton";

const WrappedPhotosList = ({ galleryId }) => {
    const dispatch = useDispatch();
    const gallery = useSelector(getCurrentGallery(galleryId));
    const { photos, titlePhoto } = gallery;
    const currentUser = useSelector(getCurrentUser());
    const isAdmin = currentUser.type;

    const [type, setType] = useState("hide");
    const handleChangeType = () => {
        setType(type === "hide" ? "show" : "hide");
    };

    const handleDeleteGallery = () => {
        console.log("deleted gallery", galleryId);
        dispatch(deleteGallery(galleryId));
    };

    const handleDeletePhoto = (photoId) => {
        const editedPhotos = photos.filter(item => item !== photoId);
        const editedTitlePhoto = titlePhoto === photoId ? editedPhotos[0] : titlePhoto;
        const editedGallery = {
            ...gallery,
            photos: [...editedPhotos],
            titlePhoto: editedTitlePhoto
        };
        dispatch(updateGallery(editedGallery));
    };

    return (
        <div className="admin-gallery-block-container">
            <div className="col-12">
                <div className="row">
                    <div className="col-11">
                        <h4 role="button" onClick={handleChangeType}>{gallery.name}</h4>
                    </div>
                    <div className="col-1">
                        <DeleteButton onDelete={handleDeleteGallery}/>
                    </div>
                </div>
                {type === "show" &&
                    (<div className="admin-photo-block-container">
                        {gallery.photos && gallery.photos.map(photoId => (
                            <div key={photoId} className="col-2">
                                <PhotoCardSmall
                                    photoId = {photoId}
                                    isAdmin={isAdmin}
                                    onDelete={() => handleDeletePhoto(photoId)}
                                />
                            </div>
                        ))}
                    </div>)
                }
            </div>
        </div>
    );
};

WrappedPhotosList.propTypes = {
    galleryId: PropTypes.string
};

export default WrappedPhotosList;
