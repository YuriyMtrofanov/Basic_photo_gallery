import React, { useState } from "react";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";

const CreateGalleryForm = () => {
    const [inputData, setInputData] = useState({
        name: "",
        description: "",
        titlePhoto: "",
        photos: []
    });
    // const reference = {
    //     id: "67rdca3eeb7f6fgeed471816",
    //     name: "Album name",
    //     description: "description",
    //     titlePhoto: "title_photoId",
    //     photos: []
    // };
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
        <div className="create-gallery-container">
            <div className="row">
                <div className="col-12">
                    <h1>Создать новый альбом</h1>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            name="name"
                            type="name"
                            label="Название статьи"
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
                    </form>
                    <button
                        className="btn btn-secondary mt-3"
                        onClick={handleSubmit}
                    >Create</button>
                </div>
            </div>
        </div>
    );
};

export default CreateGalleryForm;
