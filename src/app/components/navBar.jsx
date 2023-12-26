import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import "./navBar.css";
import {
    getUserAccountType,
    getIsLoggedIn
} from "../store/users";
// import localStorageService from "../services/localStorage.service";
// import { getCurrentUser } from "../store/users";

const NavBar = () => {
    const isLoggedIn = useSelector(getIsLoggedIn());
    const userAccountType = useSelector(getUserAccountType());
    console.log("userAccountType", userAccountType);
    // console.log("isLoggedIn", isLoggedIn);
    return (
        <div className="nav-container">
            <div className="nav-content">
                <div className="nav-block">
                    <div className="nav-item">
                        <NavLink className="nav-link text-light" to="/galleries">Galleries</NavLink>
                    </div>
                    {/* {isLoggedIn && userAccountType === "admin" &&
                        <div className="nav-item">
                            <NavLink className="nav-link text-light" to="/admin">Admin</NavLink>
                        </div>
                    } */}
                </div>
                <div className="nav-block">
                    {isLoggedIn
                        ? (<div className="nav-item">NavProfile</div>)
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
