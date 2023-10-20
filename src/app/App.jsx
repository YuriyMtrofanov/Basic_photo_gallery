import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/navBar";
import GalleriesPage from "./pages/galleriesPage";
import Gallery from "./pages/gallery";
import AdminPage from "./pages/adminPage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import AppLoader from "./components/HOC/appLoader";

// const DB_URL = "https://console.firebase.google.com/u/0/project/basic-photo-gallery/database/basic-photo-gallery-default-rtdb/data"

function App() {
    return (
        <div className="app-container">
            <AppLoader>
                <NavBar/>
                <Routes>
                    <Route path="" element={<Outlet/>}>
                        <Route path="" element={<GalleriesPage/>}/>
                        <Route path=":galleryId" element={<Gallery/>}/>
                    </Route>
                    <Route path="admin" element={<AdminPage/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
            </AppLoader>
        </div>
    );
}

export default App;
