import React, { useState } from "react";
import { useSelector } from "react-redux";
import { getCurrentUser } from "../store/users";
import { NavLink } from "react-router-dom";

const NavProfile = () => {
    const [active, setActive] = useState(false);
    const currentUser = useSelector(getCurrentUser());
    const handleActive = () => {
        setActive(prevState => !prevState);
    };
    return (
        <>
            {currentUser &&
                <div className="dropdown" onClick={handleActive}>
                    <div className="btn dropdown-toggle d-flex align-items-center">
                        <div className="me-2 active text-light">
                            <h5>
                                {currentUser.firstName + " " + currentUser.lastName}
                            </h5>
                        </div>
                        <img
                            src={currentUser.img}
                            height="30"
                            className="img-responsive rounded-circle"
                        />
                    </div>
                    <div
                        className={"w-100 text-light dropdown-menu" + (active ? " show" : "")}
                    >
                        <NavLink to="/logout" className="dropdown-item">Log Out</NavLink>
                        {/* <NavLink to="/logout" className="dropdown-item">Log Out</NavLink> */}
                        {/* <NavLink to="/logout" className="dropdown-item">Log Out</NavLink> */}
                    </div>
                </div>
            }
        </>
    );
};

export default NavProfile;
