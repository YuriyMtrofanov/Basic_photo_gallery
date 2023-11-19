import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BackButton = ({
    endpoint
}) => {
    const navigate = useNavigate();
    const handleClick = (data) => {
        navigate(data ? `${data}` : -1);
    };
    return (
        <div
            className="back-button"
            placeholder="back"
            onClick={() => handleClick(endpoint)}
            role="button"
        >
            <h1><i className="bi bi-caret-left text-light"></i></h1>
        </div>
    );
};

BackButton.propTypes = {
    endpoint: PropTypes.string
};

export default BackButton;
