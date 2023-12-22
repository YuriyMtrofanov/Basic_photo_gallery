import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGalleriesLoadingStatus, loadGalleriesList } from "../../store/galleries";
import PropTypes from "prop-types";
import { getPhotosLoadStatus, loadPhotosList } from "../../store/photos";
import { getUsersLoadingStatus, loadUsersList } from "../../store/users";

const AppLoader = ({ children }) => {
    const dispatch = useDispatch();
    const galleriesLoadingStatus = useSelector(getGalleriesLoadingStatus());
    const photosLoadingStatus = useSelector(getPhotosLoadStatus());
    const usersLoadingStatus = useSelector(getUsersLoadingStatus());
    useEffect(() => {
        dispatch(loadGalleriesList());
        dispatch(loadPhotosList());
        dispatch(loadUsersList());
    }, []);
    if (galleriesLoadingStatus && photosLoadingStatus && usersLoadingStatus) return "Loading...";
    return children;
};

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

export default AppLoader;
