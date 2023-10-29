import React from "react";
import PropTypes from "prop-types";

const AddPhotoForm = ({
    name,
    type,
    label,
    value,
    onChange
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: [target.value] });
    };
    return (
        <div className="text-field">
            <label htmlFor={name}>{ label }</label>
            <div className="input-group has-validation">
                <input
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

AddPhotoForm.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
    ]),
    onChange: PropTypes.func
};

export default AddPhotoForm;
