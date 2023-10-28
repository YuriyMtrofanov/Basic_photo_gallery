import React from "react";
import PropTypes from "prop-types";

const TextAreaField = ({
    name,
    type,
    label,
    value,
    onChange
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value });
    };
    return (
        <div className="text-area-field">
            <label htmlFor={name}>{ label }</label>
            <div className="input-group has-validation">
                <textarea
                    id={ name }
                    name={ name }
                    type={ type }
                    value={ value }
                    className="form-control"
                    onChange={handleChange}
                />
            </div>
        </div>
    );
};

TextAreaField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
};

export default TextAreaField;
