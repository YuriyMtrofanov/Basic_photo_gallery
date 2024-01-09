import React from "react";
import PropTypes from "prop-types";

const RadioField = ({
    options,
    name,
    label,
    value,
    onChange
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="radio-field">
            <label className="form-label">{label}</label>
            <div className="form-check-block">
                {options.map(option => (
                    <div className="form-check form-check-inline" key={option.name + option.value}>
                        <label className="form-check-label" htmlFor="inlineRadio1">{option.name}</label>
                        <input
                            className="form-check-input"
                            type="radio"
                            name={name}
                            id={option.name + option.value}
                            checked={option.value === value}
                            value={option.value}
                            onChange={handleChange}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

RadioField.propTypes = {
    options: PropTypes.array,
    name: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default RadioField;
