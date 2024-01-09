import React, { useState } from "react";
import {
    useDispatch,
    useSelector
} from "react-redux";
import {
    editUser,
    getCurrentUser
} from "../../store/users";
import useValidate from "../hooks/useValidate";
import { validator } from "../../utils/validator";
import signUpValidationConfig from "../../constants/signUpValidationConfig";
import TextField from "./inputs/TextField";
import DateField from "./inputs/DateField";
import { useNavigate } from "react-router-dom";

const EditUserForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentUser = useSelector(getCurrentUser());

    const [inputData, setInputData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        country: currentUser.country,
        city: currentUser.city,
        img: currentUser.img,
        birthDate: currentUser.birthDate
    });
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
        const outputData = {
            ...currentUser,
            ...inputData
        };
        dispatch(editUser(outputData));
        navigate("/galleries");
    };

    return (
        <form onSubmit = { handleSubmit }>
            <div className="login-form-container">
                <h1 className="text-center">Register</h1>
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
                {enterError && <p className="text-danger">{enterError}</p>}
                <button
                    type="submit"
                    className="btn btn-secondary mt-3"
                    disabled={!isAbled || enterError}
                >Сохранить изменения</button>
            </div>
        </form>
    );
};

export default EditUserForm;
