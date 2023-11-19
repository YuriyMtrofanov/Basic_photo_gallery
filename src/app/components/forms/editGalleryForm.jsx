import React, { useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteGallery, getCurrentGallery, updateGallery } from "../../store/galleries";
import { getAllPhotos } from "../../store/photos";
import TextField from "./inputs/TextField";
import TextAreaField from "./inputs/TextAreaField";
import PhotoCardSmall from "../cards/photoCardSmall";
import BackButton from "../buttons/backButton";

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

    // Блок wrapper с выбором из списка всех фотографий
    const [type, setType] = useState("hide");
    const handleChangeType = () => {
        setType(type === "hide" ? "show" : "hide");
    };

    const [selectedItems, setSelectedItems] = useState([]);
    const handleGetSelectedPhotos = (data) => {
        const isExist = selectedItems.find(item => item === data);
        if (!isExist) {
            setSelectedItems(prevState => ([...prevState, data]));
        } else {
            setSelectedItems(prevState => (prevState.filter(item => item !== data)));
        }
    };

    // Создаю массив из id всех фотографий
    const allPhotosIds = allPhotos && allPhotos.map(photo => photo.id);
    // Сравниваю два массива и оставляю только уникальные id
    const filteredPhotos = _.difference(allPhotosIds, currentGallery.photos);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const outputAlbum = {
            ...inputAlbumData,
            photos: [
                ...inputAlbumData.photos,
                ...selectedItems
            ]
        };
        try {
            dispatch(updateGallery(outputAlbum));
        } catch (error) {
            console.error(error.message);
        } finally {
            navigate(-1);
        }
    };

    const handleDelete = async () => {
        try {
            dispatch(deleteGallery(galleryId));
        } catch (error) {
            console.error(error.message);
        } finally {
            navigate("/galleries");
        }
    };

    if (!allPhotos) return "...Loading";
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
                        className="btn btn-secondary mt-3"
                        onClick={handleChangeType}
                    >Добавить фотографии</button>
                    <div className="add-photos-wrap-container">
                        <div className="row">
                            {type === "show" &&
                                filteredPhotos.map((id) => (
                                    <div key={id} className="col-2">
                                        <PhotoCardSmall
                                            photoId = {id}
                                            getSelectedPhoto = {handleGetSelectedPhotos}
                                        />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-secondary mt-3"
                        onClick={handleSubmit}
                    >Редактировать</button>
                    <button
                        type="delete"
                        className="btn btn-danger mt-3"
                        onClick={handleDelete}
                    >Удалить аальбом</button>
                </div>
            </div>
            <BackButton endpoint={`/galleries/${galleryId}`}/>
        </div>
    );
};

export default EditGalleryForm;
