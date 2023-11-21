import React, { useState } from "react";
import TextField from "./inputs/TextField";

const LoginForm = () => {
    const initialData = {
        email: "",
        password: ""
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
            <h1 className="text-center">Login</h1>
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
            <button
                type="submit"
                className="btn btn-secondary mt-3"
                onClick={handleSubmit}
            >Login</button>
        </div>
    );
};

export default LoginForm;
