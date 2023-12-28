import React from "react";
import PropTypes from "prop-types";

const TextField = ({
    name,
    type,
    label,
    value,
    onChange,
    error,
    placeholder
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    const getInputClasses = () => {
        return "text-secondary form-control" + (error ? " is-invalid" : "");
    };
    return (
        <div className="text-field mt-2">
            <label htmlFor={name}>{ label }</label>
            <div className="input-group has-validation">
                <input
                    id={ name }
                    name={ name }
                    type={ type }
                    value={ value }
                    onChange={handleChange}
                    className = {getInputClasses()}
                    placeholder = {placeholder === "Search" ? "Search" : ""}
                />
                <div className="invalid-feedback">{error}</div>
            </div>
        </div>
    );
};

TextField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string
};

export default TextField;
