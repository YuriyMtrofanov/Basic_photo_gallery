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
import CreateGalleryForm from "./components/forms/createGalleryForm";
import EditGalleryForm from "./components/forms/editGalleryForm";
import LoginPage from "./pages/loginPage";
import LogoutPage from "./pages/logoutPage";
import EditUserForm from "./components/forms/editUserForm";
// import AddPhotoForm from "./components/forms/addPhotoForm";

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
                            <Route path="edit_album" element={<EditGalleryForm/>}/>
                            {/* <Route path="add_photo" element={<AddPhotoForm/>}/> */}
                        </Route>
                        <Route path="create_album" element={<CreateGalleryForm/>}/>
                    </Route>
                    <Route path="login" element={<Outlet/>}>
                        <Route index element={<LoginPage/>}/>
                        <Route path="register" element={<LoginPage/>}/>
                    </Route>
                    <Route path="users" element={<Outlet/>}>
                        <Route path=":userId" element={<EditUserForm/>}/>
                    </Route>
                    <Route path="logout" element={<LogoutPage/>}/>
                    <Route path="admin" element={<AdminPage/>}/>
                    <Route path="*" element={<Navigate to="/login"/>}/>
                </Routes>
            </div>
        </AppLoader>
    );
}

export default App;
