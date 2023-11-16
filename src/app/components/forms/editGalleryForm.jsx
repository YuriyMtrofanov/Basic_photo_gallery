import React, { useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentGallery, updateGallery } from "../../store/galleries";
import { getAllPhotos } from "../../store/photos";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
import PhotoCardSmall from "../cards/photoCardSmall";

const EditGalleryForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { galleryId } = useParams();
    const currentGallery = useSelector(getCurrentGallery(galleryId));
    const allPhotos = useSelector(getAllPhotos());

    const [inputAlbumData, setInputAlbumData] = useState(currentGallery);
    const handleAlbumChange = (target) => {
        setInputAlbumData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const [type, setType] = useState("hide");
    const handleChangeType = () => {
        setType(type === "hide" ? "show" : "hide");
    };

    const [selectedItems, setSelectedItems] = useState([]);
    const handleGetSelectedPhotos = (data) => {
        const isExist = selectedItems.find(item => item === data);
        if (!isExist) {
            setSelectedItems(prevState => ([...prevState, data]));
        } else {
            setSelectedItems(prevState => (prevState.filter(item => item !== data)));
        }
    };

    const allPhotosIds = allPhotos && allPhotos.map(photo => photo.id);
    const filteredPhotos = _.difference(allPhotosIds, currentGallery.photos);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const outputAlbum = {
            ...inputAlbumData,
            photos: [
                ...inputAlbumData.photos,
                ...selectedItems
            ]
        };
        console.log("outputAlbum", outputAlbum);
        try {
            dispatch(updateGallery(outputAlbum));
        } catch (error) {
            console.error(error.message);
        } finally {
            navigate(-1);
        }
    };
    if (!allPhotos) return "...Loading";
    return (
        <div className="edit-gallery-container">
            <div className="row">
                <div className="col-12">
                    <h1>Редактировать альбом {inputAlbumData.name}</h1>
                    <TextField
                        name="name"
                        type="name"
                        label="Название альбома"
                        value={inputAlbumData.name}
                        onChange={handleAlbumChange}
                    />
                    <TextAreaField
                        name="description"
                        type="description"
                        label="Краткое описание"
                        value={inputAlbumData.description}
                        onChange={handleAlbumChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-secondary mt-3"
                        onClick={handleSubmit}
                    >Редактировать</button>
                    <button
                        className="btn btn-secondary mt-3"
                        onClick={handleChangeType}
                    >Добавить фотографии</button>
                    <div className="add-photos-wrap-container">
                        <div className="row">
                            {type === "show" &&
                                filteredPhotos.map((id) => (
                                    <div key={id} className="col-2">
                                        <PhotoCardSmall
                                            photoId = {id}
                                            getSelectedPhoto = {handleGetSelectedPhotos}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditGalleryForm;
