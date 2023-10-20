import {
    createAction,
    createSlice
} from "@reduxjs/toolkit";
import photoService from "../services/photo.service";

const photoSlice = createSlice({
    name: "photos",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        photosRequested: (state) => {
            state.isLoading = true;
        },
        photosReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        photosRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        // photoCreateRequested
        photoCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        // photoCreateFailed
        // photoEditRequested
        photoEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((photo) =>
                photo.id === action.payload.id
            )] = action.payload;
        },
        // photoEditFailed
        // photoDeleteRequested
        photoDeleted: (state, action) => {
            state.entities = state.entities.filter(item => item.id !== action.payload);
        }
        // photoDeleteFailed
    }
});

const { reducer: photosReducer, actions } = photoSlice;
const {
    photosRequested,
    photosReceived,
    photosRequestFailed,
    photoCreated,
    photoEdited,
    photoDeleted
} = actions;

const photoCreateRequested = createAction("photos/photoCreateRequested");
const photoCreateFailed = createAction("photos/photoCreateFailed");
const photoEditRequested = createAction("photos/photoEditRequested");
const photoEditFailed = createAction("photos/photoEditFailed");
const photoDeleteRequested = createAction("photos/photoDeleteRequested");
const photoDeleteFailed = createAction("photos/photoDeleteFailed");

export const loadPhotosList = () => async (dispatch) => {
    dispatch(photosRequested());
    try {
        const { content } = await photoService.getAllPhotos();
        dispatch(photosReceived(content));
    } catch (error) {
        dispatch(photosRequestFailed(error.message));
    }
};

export const createPhoto = (payload) => async (dispatch) => {
    dispatch(photoCreateRequested());
    try {
        const { content } = await photoService.addPhoto(payload);
        dispatch(photoCreated(content));
    } catch (error) {
        dispatch(photoCreateFailed(error.message));
    }
};

export const editPhoto = (payload) => async (dispatch) => {
    dispatch(photoEditRequested());
    try {
        const { content } = await photoService.updatePhoto(payload);
        dispatch(photoEdited(content));
    } catch (error) {
        dispatch(photoEditFailed(error.message));
    }
};

export const deletePhoto = (id) => async (dispatch) => {
    dispatch(photoDeleteRequested());
    try {
        const { content } = await photoService.deletePhoto(id);
        if (!content) {
            dispatch(photoDeleted(content));
        }
    } catch (error) {
        dispatch(photoDeleteFailed(error.message));
    }
};

export const getAllPhotos = () => (state) => state.photos.entities;
export const getPhotosLoadStatus = () => (state) => state.photos.isLoading;
export const getCurrentPhoto = (id) => (state) => state.photos.entities.find(photo => photo.id === id);

export default photosReducer;
