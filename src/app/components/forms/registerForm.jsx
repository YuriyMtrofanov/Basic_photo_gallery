import React, { useState } from "react";
import TextField from "./inputs/TextField";
import DateField from "./inputs/DateField";
import RadioField from "./inputs/RadioField";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { validator } from "../../utils/validator";
import { signUp } from "../../store/users";
import useValidate from "../hooks/useValidate";
import signUpValidationConfig from "../../constants/signUpValidationConfig";

const RegisterForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const initialData = {
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        country: "",
        city: "",
        img: "",
        birthDate: "",
        type: "user" || "admin"
    };
    const [inputData, setInputData] = useState(initialData);
    const { errors, isAbled, validate } = useValidate({}, inputData, validator, signUpValidationConfig);
    const [enterError, setEnterError] = useState(null);

    const handleChange = (target) => {
        setInputData(prevState => ({
            ...prevState,
            [target.name]: target.value
        }));
        setEnterError(null);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = validate();
        if (!isValid) return;
        dispatch(signUp(inputData));
        navigate("/galleries");
    };
    return (
        <form onSubmit = { handleSubmit }>
            <div className="login-form-container">
                <h1 className="text-center">Register</h1>
                <TextField
                    name="email"
                    type="text"
                    label="Введите email"
                    value={inputData.email}
                    onChange={handleChange}
                    error = {errors.email}
                />
                <TextField
                    name="password"
                    type="text"
                    label="Введите пароль"
                    value={inputData.password}
                    onChange={handleChange}
                    error = {errors.password}
                />
                <TextField
                    name="firstName"
                    type="text"
                    label="Ваше имя"
                    value={inputData.firstName}
                    onChange={handleChange}
                    error = {errors.firstName}
                />
                <TextField
                    name="lastName"
                    type="text"
                    label="Ваша фамилия"
                    value={inputData.lastName}
                    onChange={handleChange}
                    error = {errors.lastName}
                />
                <TextField
                    name="country"
                    type="text"
                    label="Страна"
                    value={inputData.country}
                    onChange={handleChange}
                    error = {errors.country}
                />
                <TextField
                    name="city"
                    type="text"
                    label="Город"
                    value={inputData.city}
                    onChange={handleChange}
                    error = {errors.city}
                />
                <TextField
                    name="img"
                    type="text"
                    label="Ссылка на аватар"
                    value={inputData.img}
                    onChange={handleChange}
                    error = {errors.img}
                />
                <DateField
                    label="Дата рождения"
                    type="date"
                    name="birthDate"
                    value={inputData.birthDate}
                    onChange={handleChange}
                    error = {errors.birthDate}
                />
                <RadioField
                    options={[
                        { name: "User", value: "user" },
                        { name: "Admin", value: "admin" }
                    ]}
                    name="type"
                    label="Тип учетной записи"
                    value={inputData.type}
                    onChange={handleChange}
                />
                {enterError && <p className="text-danger">{enterError}</p>}
                <button
                    type="submit"
                    className="btn btn-secondary mt-3"
                    disabled={!isAbled || enterError}
                >Регистрация</button>
            </div>
        </form>
    );
};

export default RegisterForm;
