import React from "react";
import PropTypes from "prop-types";

const DeleteButton = ({ onDelete }) => {
    return (
        <div
            className="delete-button text-dark"
            role="button"
            onClick={onDelete}
        >
            <h3><i className="bi bi-trash3"></i></h3>
        </div>
    );
};

DeleteButton.propTypes = {
    onDelete: PropTypes.func
};

export default DeleteButton;
