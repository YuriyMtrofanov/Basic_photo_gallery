import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
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
                    <div className="nav-item">
                        Login
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
