import React, { useEffect } from "react";
// import galleriesService from "../services/galleries.service";
import axios from "axios";

const GalleriesPage = () => {
    useEffect(async () => {
        try {
            const content = await axios.get("https://basic-photo-gallery-default-rtdb.europe-west1.firebasedatabase.app/gallery.json");
            console.log(content);
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div className="gallery-container">
            <h1 className="gallery-container">All Galleries</h1>
        </div>
    );
};

export default GalleriesPage;
