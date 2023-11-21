import React, { useState } from "react";
import TextField from "./inputs/TextField";
import DateField from "./inputs/DateField";

const RegisterForm = () => {
    const initialData = {
        email: "",
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
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("outputData", inputData);
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
                type="text"
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
