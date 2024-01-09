import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut } from "../store/users";
const LogoutPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(logOut());
        navigate("/login");
    }, []);
    return (
        <h1>Log Out</h1>
    );
};

export default LogoutPage;
