import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentGallery } from "../../store/galleries";
import PropTypes from "prop-types";
import PhotoCardSmall from "../cards/photoCardSmall";

const WrappedPhotosList = ({ galleryId }) => {
    const gallery = useSelector(getCurrentGallery(galleryId));
    const [selectedItems, setSelectedItems] = useState([]);
    const handleGetSelectedPhotos = (data) => {
        const isExist = selectedItems.find(item => item === data);
        if (!isExist) {
            setSelectedItems(prevState => ([...prevState, data]));
        } else {
            setSelectedItems(prevState => (prevState.filter(item => item !== data)));
        }
    };
    const [type, setType] = useState("hide");
    const handleChangeType = () => {
        setType(type === "hide" ? "show" : "hide");
    };
    return (
        <div className="row">
            <div className="col-12">
                <h5 role="button" onClick={handleChangeType}>{gallery.name}</h5>
                {type === "show" && gallery.photos && gallery.photos.map(photoId => (
                    <div key={photoId} className="col-2">
                        <PhotoCardSmall
                            photoId = {photoId}
                            getSelectedPhoto = {handleGetSelectedPhotos}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

WrappedPhotosList.propTypes = {
    galleryId: PropTypes.string
};

export default WrappedPhotosList;
