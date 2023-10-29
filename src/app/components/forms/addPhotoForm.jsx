import React, { useState } from "react";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";

const AddPhotoForm = () => {
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

    const handleSubmit = () => {
        console.log(inputData);
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
                    </form>
                    <button
                        className="btn btn-secondary mt-3"
                        onClick={handleSubmit}
                    >Add</button>
                </div>
            </div>
        </div>
    );
};

export default AddPhotoForm;
