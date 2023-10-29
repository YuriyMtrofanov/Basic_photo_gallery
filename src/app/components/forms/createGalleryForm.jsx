import React, { useState } from "react";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
// import AddPhotoField from "./inputs/AddPhotoField";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { createGallery } from "../../store/galleries";

const CreateGalleryForm = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        name: "",
        description: "",
        titlePhoto: "", // id string
        photos: "" // photos: [] Array of id`s
    });

    const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

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
                        {/* <AddPhotoField
                            name="photos"
                            type="photos"
                            label="Добавить фотографию"
                            value={inputData.photos}
                            onChange={handleChange}
                        /> */}
                        <button
                            type="submit"
                            className="btn btn-secondary mt-3"
                            onClick={handleSubmit}
                        >Create</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateGalleryForm;
