import {
    createAction,
    createSlice
} from "@reduxjs/toolkit";
import galleryService from "../services/gallery.service";

const galleriesSlice = createSlice({
    name: "galleries",
    initialState: {
        entities: null,
        isLoading: true,
        galleriesDataLoaded: false,
        error: null
    },
    reducers: {
        galleriesRequested: (state) => {
            state.isLoading = true;
        },
        galleriesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.galleriesDataLoaded = true;
            state.error = null;
        },
        galleriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        galleryCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        galleryEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((gallery) =>
                gallery.id === action.payload.id
            )] = action.payload;
        },
        galleryDeleted: (state, action) => {
            state.entities = state.entities.filter(item => item.id !== action.payload);
        }
    }
});

const { reducer: galleriesReducer, actions } = galleriesSlice;
const {
    galleriesRequested,
    galleriesReceived,
    galleriesRequestFailed,
    galleryCreated,
    galleryEdited,
    galleryDeleted
} = actions;

const galleryCreateRequested = createAction("galleries/galleryCreateRequested");
const galleryCreateFailed = createAction("galleries/galleryCreateFailed");
const galleryEditRequested = createAction("galleries/galleryEditRequested");
const galleryEditFailed = createAction("galleries/galleryEditFailed");
const galleryDeleteRequested = createAction("galleries/galleryDeleteRequested");
const galleryDeleteFailed = createAction("galleries/galleryDeleteFailed");

export const loadGalleriesList = () => async (dispatch) => {
    dispatch(galleriesRequested());
    try {
        const { content } = await galleryService.getAllGalleries();
        dispatch(galleriesReceived(content));
    } catch (error) {
        dispatch(galleriesRequestFailed(error.message));
    }
};

export const createGallery = (payload) => async (dispatch) => {
    dispatch(galleryCreateRequested());
    try {
        const { content } = await galleryService.createGallery(payload);
        dispatch(galleryCreated(content));
    } catch (error) {
        dispatch(galleryCreateFailed(error.message));
    }
};

export const updateGallery = (payload) => async (dispatch) => {
    dispatch(galleryEditRequested());
    try {
        const { content } = await galleryService.updateGallery(payload);
        dispatch(galleryEdited(content));
    } catch (error) {
        dispatch(galleryEditFailed(error.message));
    }
};

export const deleteGallery = (id) => async (dispatch) => {
    dispatch(galleryDeleteRequested());
    try {
        const { content } = await galleryService.deleteGallery(id);
        if (!content) {
            dispatch(galleryDeleted(content));
        }
    } catch (error) {
        dispatch(galleryDeleteFailed(error.message));
    }
};

export const getGalleriesList = () => (state) => state.galleries.entities;
export const getGalleriesDataStatus = () => (state) => state.galleries.galleriesDataLoaded;
export const getCurrentGallery = (id) => (state) => state.galleries.entities.find(gallery => gallery.id === id);

export default galleriesReducer;
