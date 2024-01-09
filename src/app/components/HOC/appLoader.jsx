import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleriesDataStatus, loadGalleriesList } from "../../store/galleries";
import PropTypes from "prop-types";
import { getPhotosDataStatus, loadPhotosList } from "../../store/photos";
import { getDataStatus, getIsLoggedIn, loadUsersList } from "../../store/users";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(getIsLoggedIn());
    const galleriesDataStatus = useSelector(getGalleriesDataStatus());
    const photosDataStatus = useSelector(getPhotosDataStatus());
    const usersDataStatus = useSelector(getDataStatus());
    useEffect(() => {
        dispatch(loadGalleriesList());
        dispatch(loadPhotosList());
        if (isLoggedIn) {
            dispatch(loadUsersList());
        }
    }, [isLoggedIn]);
    if (!galleriesDataStatus && !photosDataStatus && !usersDataStatus) return "Loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
