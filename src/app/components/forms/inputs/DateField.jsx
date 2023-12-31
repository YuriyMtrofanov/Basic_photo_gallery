import React from "react";
import PropTypes from "prop-types";

const DateField = ({
    label,
    type,
    name,
    value,
    onChange,
    error
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };

    const getInputClasses = () => {
        return "text-secondary form-control" + (error ? " is-invalid" : "");
    };

    console.log("error", error);
    return (
        <div className="mb-4 text">
            <label >{ label }</label>
            <div htmlFor={name} className="input-group date has-validation">
                <input
                    id = {name}
                    name = {name}
                    type = {type}
                    value = {value}
                    onChange = {handleChange}
                    className = {getInputClasses()}
                />
                <span className="input-group-addon">
                    <span className="glyphicon glyphicon-calendar"></span>
                </span>
                <div className="invalid-feedback">{error}</div>
            </div>
        </div>
    );
};

DateField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string
};

export default DateField;
