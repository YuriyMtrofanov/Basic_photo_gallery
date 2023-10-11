import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import NavBar from "./components/navBar";
import GalleryPage from "./pages/galleryPage";
import Gallery from "./pages/gallery";
import AdminPage from "./pages/adminPage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="app-container">
            <NavBar/>
            <Routes>
                <Route path="" element={<Outlet/>}>
                    <Route path="" element={<GalleryPage/>}/>
                    <Route path=":galleryId" element={<Gallery/>}/>
                </Route>
                <Route path="admin" element={<AdminPage/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </div>
    );
}

export default App;
