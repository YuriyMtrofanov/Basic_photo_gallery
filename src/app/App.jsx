import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/navBar";
import GalleriesPage from "./pages/galleriesPage";
import Gallery from "./pages/gallery";
import PhotoPage from "./pages/photoPage";
import AdminPage from "./pages/adminPage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AppLoader from "./components/HOC/appLoader";
// import PhotoPage from "./pages/photoPage";

// const DB_URL = "https://console.firebase.google.com/u/0/project/basic-photo-gallery/database/basic-photo-gallery-default-rtdb/data"

function App() {
    return (
        <AppLoader>
            <NavBar/>
            <div className="app-container">
                <Routes>
                    <Route path="galleries" element={<Outlet/>}>
                        <Route index element={<GalleriesPage/>}/>
                        <Route path=":galleryId" element={<Outlet/>}>
                            <Route index element={<Gallery/>}/>
                            <Route path=":photoId" element={<PhotoPage/>}/>
                        </Route>
                    </Route>
                    <Route path="admin" element={<AdminPage/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </div>
        </AppLoader>
    );
}

export default App;
