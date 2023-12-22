import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import localStorageService from "../services/localStorage.service";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../store/users";

const NavBar = () => {
    const userId = localStorageService.getCurrentUserId();
    // но при таком раскладе Логин меняется на имя только при перезагрузке
    // судя по всему нужно локал стэйт мутить
    const currentUser = localStorageService.getAccessToken() ? useSelector(getCurrentUser(userId)) : null;
    console.log("current user info", currentUser);
    return (
        <div className="nav-container">
            <div className="nav-content">
                <div className="nav-block">
                    <div className="nav-item">
                        <NavLink className="nav-link text-light" to="/galleries">Galleries</NavLink>
                    </div>
                    <div className="nav-item">
                        <NavLink className="nav-link text-light" to="/admin">Admin</NavLink>
                    </div>
                </div>
                <div className="nav-block">
                    {currentUser
                        ? (<div className="nav-item">
                            <NavLink className="nav-link text-light" to="/login">{currentUser.firstName}</NavLink>
                        </div>)
                        : (<div className="nav-item">
                            <NavLink className="nav-link text-light" to="/login">Login</NavLink>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default NavBar;
