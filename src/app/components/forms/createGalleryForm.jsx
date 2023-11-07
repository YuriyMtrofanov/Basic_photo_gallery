import React, { useState } from "react";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
import { nanoid } from "@reduxjs/toolkit";
import MultiplePhotoForm from "./multiplePhotoForm";
import { useDispatch } from "react-redux";
import { createGallery } from "../../store/galleries";
import { createPhoto } from "../../store/photos";
import { useNavigate } from "react-router-dom";

const CreateGalleryForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialAlbumData = {
        id: `album-${nanoid()}`,
        name: "",
        description: "",
        titlePhoto: "",
        photos: []
    };
    const [inputAlbumData, setInputAlbumData] = useState(initialAlbumData);
    const handleAlbumChange = (target) => {
        setInputAlbumData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const photos = [];
    const handleChangePhoto = (addedPhoto) => {
        const changedPhoto = photos.find(photo => photo.id === addedPhoto.id);
        if (changedPhoto) {
            const index = photos.findIndex(photo => photo.id === addedPhoto.id);
            photos[index] = addedPhoto;
        } else {
            photos.push(addedPhoto);
        }
    };

    const handleAlbumSubmit = async (event) => {
        event.preventDefault();
        const photosIdsArray = photos.map(photo => photo.id);
        const outputAlbum = {
            ...inputAlbumData,
            photos: photosIdsArray,
            titlePhoto: photosIdsArray[0]
        };
        // console.log("outputAlbum", outputAlbum);
        try {
            photos.map(photo => dispatch(createPhoto({ ...photo })));
            dispatch(createGallery(outputAlbum));
        } catch (error) {
            console.error(error.message);
        } finally {
            navigate(-1);
            // navigate("/");
        }
        // photos.map(photo => console.log("outputPhotos", photo));
    };

    return (
        <div className="create-gallery-container">
            <div className="row">
                <div className="col-12">
                    <h1>Создать новый альбом</h1>
                    {/* <form onSubmit={handleAlbumSubmit}> */}
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
                    {/* </form> */}
                    <MultiplePhotoForm
                        changePhoto={handleChangePhoto}
                    />
                    <button
                        type="submit"
                        className="btn btn-secondary mt-3"
                        onClick={handleAlbumSubmit}
                    >Create album</button>
                </div>
            </div>
        </div>
    );
};

export default CreateGalleryForm;
