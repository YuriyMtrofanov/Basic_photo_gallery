import React, { useEffect, useState } from "react";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
// import AddPhotoField from "./inputs/AddPhotoField";
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
    const [photosToAdd, setPhotosToAdd] = useState([]);
    const handleAddPhoto = () => {
        setPhotosToAdd(prevState => [...prevState, { ...initialPhotoForm }]);
    };
    useEffect(() => {
        // я получаю все id созданных заготовок под фотографии
        // теперь мне нужно на каждой итерации добавлять полученные id в массив и этот массив
        // засабмитить в итоговый альбом.
        // Данный блок нужно будет перенести в handleSubmit
        const photosToSubmit = photosToAdd.map((photo) => photo.id);
        const outputData = {
            ...inputData,
            id: `album${nanoid()}`,
            photos: photosToSubmit
        };
        console.log("outputData", outputData);
    }, [photosToAdd]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("inputData", inputData);
        const outputData = {
            ...inputData,
            id: `album${nanoid()}`
        };
        dispatch(createGallery(outputData));
        console.log("outputData", outputData);
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
                        <button
                            type="submit"
                            className="btn btn-secondary mt-3"
                            onClick={handleSubmit}
                        >Create</button>
                    </form>
                    {/* Добавление формы с фоготрафией */}
                    <div className="add-photo-form">
                        {photosToAdd.map((newPhoto) => (
                            <AddPhotoForm
                                key={newPhoto.id}
                                id={newPhoto.id}
                            />
                        ))}
                        <button className="btn btn-secondary mt-2" onClick={handleAddPhoto}>
                            Add photo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateGalleryForm;
