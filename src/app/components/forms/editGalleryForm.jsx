import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCurrentGallery, updateGallery } from "../../store/galleries";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
import { getAllPhotos } from "../../store/photos";
const EditGalleryForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { galleryId } = useParams();
    const currentGallery = useSelector(getCurrentGallery(galleryId));
    const allPhotos = useSelector(getAllPhotos());
    const [inputAlbumData, setInputAlbumData] = useState(currentGallery);
    const handleAlbumChange = (target) => {
        setInputAlbumData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }));
    };

    const [type, setType] = useState("hide");
    const handleChangeType = () => {
        setType(type === "hide" ? "show" : "hide");
    };

    const [selectedItems, setSelectedItems] = useState([]);
    useEffect(() => {
        console.log("selectedItems", selectedItems);
    }, [selectedItems]);
    const handleChange = (id) => {
        const isExist = selectedItems.find(item => item === id);
        if (!isExist) {
            setSelectedItems(prevState => (
                [...prevState, id]
            ));
        } else {
            setSelectedItems(prevState => (prevState.filter(item => item !== id)));
        }
    };

    const getClassName = (id) => {
        const isSelected = selectedItems.find(item => item === id);
        return `gallery-card${isSelected ? "-selected" : ""}`;
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
                    <button
                        className="btn btn-secondary mt-3"
                        onClick={handleChangeType}
                    >Добавить фотографии</button>
                    <div className="add-photos-wrap-container">
                        <div className="row">
                            {type === "show" &&
                                allPhotos.map((photo) => (
                                    <div key={photo.id} className="col-2">
                                        {/* <div className="gallery-card" onClick={() => handleChangeClassname(photo.id)}> */}
                                        <div className={getClassName(photo.id)} onClick={() => handleChange(photo.id)}>
                                            {/* <div className={onClassName(photo.id)} onClick={() => handleChengeClassname(photo.id)}> */}
                                            <img src={photo.URL} className="photo-card-img" alt="photo"/>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditGalleryForm;
