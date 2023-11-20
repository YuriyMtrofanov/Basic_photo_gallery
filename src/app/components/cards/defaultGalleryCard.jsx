import React from "react";
import PropTypes from "prop-types";
const DefaultGalleryCerd = ({ type }) => {
    return (
        <div className="default-gallery-card text-light">
            <div className="default-gallery-card-body">
                <h1>{type === "add"
                    ? (<i className="bi bi-plus-square"></i>)
                    : (<i className="bi bi-card-image"></i>)
                }</h1>
            </div>
        </div>
    );
};

DefaultGalleryCerd.propTypes = {
    type: PropTypes.string
};

export default DefaultGalleryCerd;
