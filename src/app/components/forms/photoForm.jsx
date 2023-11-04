import React, { useState } from "react";
import PropTypes from "prop-types";
import TextField from "./inputs/TextField";
const PhotoForm = ({
    photoProp,
    addPhoto,
    index
}) => {
    const [photo, setPhoto] = useState(photoProp);
    const handleChange = (target) => {
        setPhoto(prevState => {
            const newPhoto = {
                ...prevState,
                [target.name]: target.value
            };
            addPhoto(newPhoto);
            return newPhoto;
        });
    };
    return (
        <>
            <p>Фото {index + 1}</p>
            <TextField
                label="Название фотографии"
                name="name"
                value={photo.name}
                onChange={handleChange}
            />
            <TextField
                label="Ссылка на изображение"
                name="URL"
                value={photo.URL}
                onChange={handleChange}
            />
        </>
    );
};

PhotoForm.propTypes = {
    photoProp: PropTypes.object,
    addPhoto: PropTypes.func,
    index: PropTypes.number
};

export default PhotoForm;
