import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleriesLoadingStatus, loadGalleriesList } from "../../store/galleries";
import PropTypes from "prop-types";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const galleriesLoadingStatus = useSelector(getGalleriesLoadingStatus());
    useEffect(() => {
        dispatch(loadGalleriesList());
        // dispatch(loadPhotosList())
    }, []);
    if (galleriesLoadingStatus) return "Loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
