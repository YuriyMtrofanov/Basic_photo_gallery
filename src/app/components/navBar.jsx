import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navBar.css";
import {
    getUserAccountType,
    getIsLoggedIn
} from "../store/users";
import NavProfile from "./navProfile";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const userAccountType = useSelector(getUserAccountType());
    return (
        <div className="nav-container">
            <div className="nav-content">
                <div className="nav-block">
                    <div className="nav-item">
                        <NavLink className="nav-link text-light" to="/galleries">Galleries</NavLink>
                    </div>
                    {isLoggedIn && userAccountType === "admin" &&
                        <div className="nav-item">
                            <NavLink className="nav-link text-light" to="/admin">Admin</NavLink>
                        </div>
                    }
                </div>
                <div className="nav-block">
                    {isLoggedIn
                        ? (<NavProfile/>)
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
