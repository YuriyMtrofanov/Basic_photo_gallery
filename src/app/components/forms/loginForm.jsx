import React, { useState } from "react";
import TextField from "./inputs/TextField";

const LoginForm = () => {
    const [inputData, setInputData] = useState({
        email: "",
        password: ""
    });
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
            <h1>Login</h1>
            <TextField
                name="email"
                type="email"
                label="Введите email"
                value={inputData.email}
                onChange={handleChange}
            />
            <TextField
                name="password"
                type="password"
                label="Введите password"
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
