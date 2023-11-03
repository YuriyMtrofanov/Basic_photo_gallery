import React, { useState } from "react";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createGallery } from "../../store/galleries";
import AddPhotoForm from "./addPhotoForm";

const CreateGalleryForm = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        name: "",
        description: "",
        titlePhoto: "", // id string
        photos: [] // photos: [] Array of id`s
    });

    const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    // Стейт для формы добавления фотографии
    const initialPhotoForm = {
        id: `photo${nanoid()}`,
        name: "",
        description: "",
        URL: ""
    };
    const [photosToAdd, setPhotosToAdd] = useState([initialPhotoForm]);
    const handleAddPhoto = () => {
        setPhotosToAdd(prevState => [...prevState, { ...initialPhotoForm }]);
        console.log("album reference data", inputData);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log("inputData", inputData);
        const createdPhotosIds = photosToAdd.map((photo) => photo.id);
        const outputData = {
            ...inputData,
            id: `album${nanoid()}`,
            photos: createdPhotosIds,
            titlePhoto: createdPhotosIds[0]
        };
        dispatch(createGallery(outputData));
        // console.log("outputData", outputData);
    };
    return (
        <div className="create-gallery-container">
            <div className="row">
                <div className="col-12">
                    <h1>Создать новый альбом</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            type="name"
                            label="Название альбома"
                            value={inputData.name}
                            onChange={handleChange}
                        />
                        <TextAreaField
                            name="description"
                            type="description"
                            label="Краткое описание"
                            value={inputData.description}
                            onChange={handleChange}
                        />
                        {/* <button
                            type="submit"
                            className="btn btn-secondary mt-3"
                            onClick={handleSubmit}
                        >Create album</button> */}
                    </form>
                    {/* Добавление формы с фоготрафией */}
                    <div className="add-photo-form">
                        {photosToAdd.map((newPhoto) => (
                            <AddPhotoForm
                                key={newPhoto.id}
                                photoId={newPhoto.id}
                            />
                        ))}
                        <button className="btn btn-secondary mt-2" onClick={handleAddPhoto}>
                            Добавить фотографию
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary mt-3"
                        onClick={handleSubmit}
                    >Create album</button>
                </div>
            </div>
        </div>
    );
};

export default CreateGalleryForm;
