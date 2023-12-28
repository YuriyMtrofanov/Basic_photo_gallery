import React, { useState } from "react";
import TextField from "./inputs/TextField";
import { useDispatch } from "react-redux";
import { logIn } from "../../store/users";
import { useNavigate } from "react-router-dom";
import { validator } from "../../utils/validator";
import useValidate from "../hooks/useValidate";
import userValidationConfig from "../../constants/loginValidationConfig";

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const initialData = {
        email: "",
        password: ""
    };
    const [inputData, setInputData] = useState(initialData);
    const { errors, isAbled, validate } = useValidate({}, inputData, validator, userValidationConfig);
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
        dispatch(logIn(inputData));
        navigate("/galleries");
    };
    return (
        <form onSubmit = { handleSubmit }>
            <div className="login-form-container">
                <h1 className="text-center">Login</h1>
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
                {enterError && <p className="text-danger">{enterError}</p>}
                <button
                    type="submit"
                    className="btn btn-secondary mt-3"
                    disabled={!isAbled || enterError}
                >Войти в систему</button>
            </div>
        </form>
    );
};

export default LoginForm;
