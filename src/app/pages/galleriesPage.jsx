import React from "react";
// import galleryService from "../services/gallery.service";
import photoService from "../services/photo.service";

const GalleriesPage = () => {
    const newPhoto = {
        id: "67rdca3eeb7f6fphoto471815",
        albumId: "67rdca3eeb7f6fgeed471815",
        label: "Photo label",
        title: "Photo title",
        URL: "https://sun9-6.userapi.com/impg/J-Ro91N6ewynPJKdj7DOYrLWvLXXPPSSxdKpdw/U7tiG7w3zys.jpg?size=1280x800&quality=96&sign=e688dbe9507c7feb88a9e7d73cd67e2a&c_uniq_tag=NPrehrrRmgWKRqjWgEjqBODxD7dl1HfUQTwu455AuzY&type=album"
    };
    // const handleGet = async () => {
    //     try {
    //         const content = await galleryService.getAlbums();
    //         console.log("content", content);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };

    // const handleGetAlbum = async () => {
    //     try {
    //         const content = await galleryService.getCurrentAlbum("67rdca3eeb7f6fgeed471818");
    //         console.log(content);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    // const handlePut = async () => {
    //     try {
    //         const content = await galleryService.createAlbum(newAlbum);
    //         console.log("content", content);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };

    // const handleUpdate = async () => {
    //     try {
    //         const content = await galleryService.updateAlbum(newAlbum);
    //         console.log(content);
    //     } catch (error) {
    //         console.log("error", error);
    //     }
    // };

    // const handleDelete = async () => {
    //     try {
    //         const content = await galleryService.deleteAlbum(newAlbum.id);
    //         console.log(content);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const handleGet = async () => {
        try {
            const content = await photoService.getAllPhotos();
            console.log("content", content);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleGetAlbum = async () => {
        try {
            const content = await photoService.getCurrentPhoto(newPhoto.id);
            console.log(content);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePut = async () => {
        try {
            const content = await photoService.addPhoto(newPhoto);
            console.log("content", content);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleUpdate = async () => {
        try {
            const content = await photoService.updatePhoto(newPhoto);
            console.log(content);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleDelete = async () => {
        try {
            const content = await photoService.deletePhoto(newPhoto.id);
            console.log(content);
        } catch (error) {
            console.log(error);
        }
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
