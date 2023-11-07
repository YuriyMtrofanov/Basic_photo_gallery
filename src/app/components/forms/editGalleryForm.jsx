import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentGallery, updateGallery } from "../../store/galleries";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
const EditGalleryForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { galleryId } = useParams();
    const currentGallery = useSelector(getCurrentGallery(galleryId));
    const [inputAlbumData, setInputAlbumData] = useState(currentGallery);
    const handleAlbumChange = (target) => {
        setInputAlbumData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const outputAlbum = {
            ...inputAlbumData
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
                </div>
            </div>
        </div>
    );
};

export default EditGalleryForm;
