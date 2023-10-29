import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
import { createPhoto } from "../../store/photos";

const AddPhotoForm = () => {
    const dispatch = useDispatch();
    const [inputData, setInputData] = useState({
        name: "",
        description: "",
        URL: ""
    });

    const handleChange = (target) => {
        setInputData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const outputData = {
            ...inputData,
            id: `photo${nanoid()}`
        };
        dispatch(createPhoto(outputData));
        console.log(outputData);
    };

    return (
        <div className="add-photo-container">
            <div className="row">
                <div className="col-12">
                    <h1>Добавить фотографию</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            type="name"
                            label="Название фотографии"
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
                        <TextField
                            name="URL"
                            type="URL"
                            label="Ссылка на изображение"
                            value={inputData.URL}
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            className="btn btn-secondary mt-3"
                            onClick={handleSubmit}
                        >Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddPhotoForm;
