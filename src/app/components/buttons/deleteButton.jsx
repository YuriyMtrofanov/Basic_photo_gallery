import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ onDelete }) => {
    return (
        <div
            className="delete-button text-danger"
            role="button"
            onClick={onDelete}
        >
            <h1><i className="bi bi-trash3"></i></h1>
        </div>
    );
};

DeleteButton.propTypes = {
    onDelete: PropTypes.func
};

export default DeleteButton;
