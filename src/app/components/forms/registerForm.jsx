import React, { useState } from "react";
import TextField from "./inputs/TextField";
import DateField from "./inputs/DateField";
import { useDispatch } from "react-redux";
// import { createUser } from "../../store/users";
import { useNavigate } from "react-router-dom";
// import { nanoid } from "@reduxjs/toolkit";
// import authService from "../../services/auth.service";
import { signUp } from "../../store/users";
// import { createUser } from "../../store/users";

const RegisterForm = () => {
    // const { signUp } = authService;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialData = {
        email: "", // а точно ли нужно их в б/д отправлять таким образом?
        password: "",
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        img: "",
        birthDate: "",
        type: "admin" || "user" // можно через checkbox
    };
    const [inputData, setInputData] = useState(initialData);
    const handleChange = (target) => {
        setInputData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
    };
    const [errors, setErrors] = useState({});
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // await dispatch(signUp(inputData));
            dispatch(signUp(inputData));
        } catch (error) {
            setErrors(error);
            console.log("errors", errors);
        } finally {
            navigate("/galleries");
        }
    };
    return (
        <div className="login-form-container">
            <h1 className="text-center">Register</h1>
            <TextField
                name="email"
                type="text"
                label="Введите email"
                value={inputData.email}
                onChange={handleChange}
            />
            <TextField
                name="password"
                type="text"
                label="Введите пароль"
                value={inputData.password}
                onChange={handleChange}
            />
            <TextField
                name="firstName"
                type="text"
                label="Ваше имя"
                value={inputData.firstName}
                onChange={handleChange}
            />
            <TextField
                name="lastName"
                type="text"
                label="Ваша фамилия"
                value={inputData.lastName}
                onChange={handleChange}
            />
            <TextField
                name="country"
                type="text"
                label="Страна"
                value={inputData.country}
                onChange={handleChange}
            />
            <TextField
                name="city"
                type="text"
                label="Город"
                value={inputData.city}
                onChange={handleChange}
            />
            <TextField
                name="img"
                type="text"
                label="Ссылка на аватар"
                value={inputData.img}
                onChange={handleChange}
            />
            <DateField
                label="Дата рождения"
                type="date"
                name="birthDate"
                value={inputData.birthDate}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="btn btn-secondary mt-3"
                onClick={handleSubmit}
            >Register</button>
        </div>
    );
};

export default RegisterForm;
