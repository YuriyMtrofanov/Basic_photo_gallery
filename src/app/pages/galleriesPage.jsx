import React from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import { createPhoto, deletePhoto, editPhoto, getAllPhotos, getCurrentPhoto } from "../store/photos";

const GalleriesPage = () => {
    const newPhoto = {
        id: "67rdca3eeb7f6fphoto471818",
        label: "Photo label_2",
        title: "Photo title_2",
        URL: "https://w.forfun.com/fetch/89/89e4e13c5e0b25b44371209c12ee5d44.jpeg"
    };
    const updatePhoto = {
        id: "67rdca3eeb7f6fphoto471815",
        label: "Photo label_3",
        title: "Photo title_1",
        URL: "https://w.forfun.com/fetch/5c/5c667b51332990f7af3d3b20b4548883.jpeg"
    };

    const dispatch = useDispatch();
    const photos = useSelector(getAllPhotos());
    const currentPhoto = useSelector(getCurrentPhoto("67rdca3eeb7f6fphoto471815"));
    // const newAlbum = {
    //     id: "67rdca3eeb7f6fgeed471819",
    //     label: "Album label",
    //     title: "Album title",
    //     photos: [
    //         "photo_id_1",
    //         "photo_id_2",
    //         "photo_id_2"
    //     ]
    // };
    // const updateAlbum = {
    //     id: "67rdca3eeb7f6fgeed471819",
    //     label: "Album label",
    //     title: "Album title",
    //     photos: [
    //         "photo_id_1",
    //         "photo_id_2",
    //         "photo_id_2"
    //     ]
    // };
    const handleGet = () => console.log("state", photos);
    const handlePut = () => {
        dispatch(createPhoto(newPhoto));
    };
    const handleGetAlbum = () => {
        console.log(currentPhoto);
    };
    const handleUpdate = () => {
        dispatch(editPhoto(updatePhoto));
    };
    const handleDelete = () => {
        dispatch(deletePhoto("67rdca3eeb7f6fphoto471818"));
    };

    return (
        <div className="gallery-container">
            {/* <button className="btn btn-primary" onClick={handleGet}>Get albums</button>
            <button className="btn btn-primary" onClick={handleGetAlbum}>Get current album</button>
            <button className="btn btn-primary" onClick={handlePut}>Put new album</button>
            <button className="btn btn-primary" onClick={handleUpdate}>Update album</button>
            <button className="btn btn-primary" onClick={handleDelete}>Delete album</button> */}
            <button className="btn btn-primary" onClick={handleGet}>Get photos</button>
            <button className="btn btn-primary" onClick={handleGetAlbum}>Get current photos</button>
            <button className="btn btn-primary" onClick={handlePut}>Put new photos</button>
            <button className="btn btn-primary" onClick={handleUpdate}>Update photo</button>
            <button className="btn btn-primary" onClick={handleDelete}>Delete photo</button>
        </div>
    );
};

export default GalleriesPage;
