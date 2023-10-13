import React from "react";
import galleryService from "../services/gallery.service";

const GalleriesPage = () => {
    const newAlbum = {
        id: "67rdca3eeb7f6fgeed471818",
        photos: ["юрец", "вероника", "гапета"]
    };
    const handleGet = async () => {
        try {
            const content = await galleryService.getAlbums();
            console.log("content", content);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleGetAlbum = async () => {
        try {
            const content = await galleryService.getCurrentAlbum("67rdca3eeb7f6fgeed471818");
            console.log(content);
        } catch (error) {
            console.log(error);
        }
    };

    const handlePut = async () => {
        try {
            const content = await galleryService.createAlbum(newAlbum);
            console.log("content", content);
        } catch (error) {
            console.log("error", error);
        }
    };

    const handleUpdate = async () => {
        try {
            const content = await galleryService.updateAlbum(newAlbum);
            console.log(content);
        } catch (error) {
            console.log("error", error);
        }
    };

    return (
        <div className="gallery-container">
            <button className="btn btn-primary" onClick={handleGet}>Get albums</button>
            <button className="btn btn-primary" onClick={handleGetAlbum}>Get current album</button>
            <button className="btn btn-primary" onClick={handlePut}>Put new album</button>
            <button className="btn btn-primary" onClick={handleUpdate}>Update album</button>
        </div>
    );
};

export default GalleriesPage;
