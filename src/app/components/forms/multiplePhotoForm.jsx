import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "@reduxjs/toolkit";
import PhotoForm from "./photoForm";
const MultiplePhotoForm = ({ changePhoto }) => {
    const initialPhotoData = {
        id: `photo-${nanoid()}`,
        name: "",
        URL: ""
    };
    const [inputPhotosArray, setInputPhotosArray] = useState([initialPhotoData]);
    const handleAddPhoto = () => {
        setInputPhotosArray([...inputPhotosArray, { ...initialPhotoData, id: `photo-${nanoid()}` }]);
    };
    useEffect(() => {
        console.log("inputPhotosArray", inputPhotosArray);
    }, [inputPhotosArray]);
    return (
        <div>
            <h1>Фотографии</h1>
            {inputPhotosArray.map((photo, index) => (
                <PhotoForm
                    key={photo.id}
                    photoProp={photo}
                    addPhoto={changePhoto}
                    index={index}
                />
            ))}
            <button
                className="btn btn-primary mt-2"
                onClick={handleAddPhoto}
            >Добавить фото</button>
        </div>
    );
};

MultiplePhotoForm.propTypes = {
    changePhoto: PropTypes.func
};

export default MultiplePhotoForm;
