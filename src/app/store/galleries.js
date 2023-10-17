import {
    // createAction,
    createSlice
} from "@reduxjs/toolkit";
import galleryService from "../services/gallery.service";

const galleriesSlice = createSlice({
    name: "galleries",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        galleriesRequested: (state) => {
            state.isLoading = true;
        },
        galleriesReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        galleriesRequestFailed: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        },
        // galleryCreateRequested
        galleryCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        // galleryCreateFailed
        // galleryEditRequested
        galleryEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((gallery) =>
                gallery.id === action.payload.id
            )] = action.payload;
        }
        // galleryEditFailed
    }
});

const { reducer: galleriesReducer, actions } = galleriesSlice;
const {
    galleriesRequested,
    galleriesReceived,
    galleriesRequestFailed
    // galleryCreated,
    // galleryEdited
} = actions;

// const galleryCreateRequested = createAction("galleries/galleryCreateRequested");
// const galleryCreateFailed = createAction("galleries/galleryCreateFailed");
// const galleryEditRequested = createAction("galleries/galleryEditRequested");
// const galleryEditFailed = createAction("galleries/galleryEditFailed");

export const loadGalleriesList = () => async (dispatch, getState) => {
    dispatch(galleriesRequested());
    try {
        const content = await galleryService.getAllGalleries();
        dispatch(galleriesReceived(content));
    } catch (error) {
        dispatch(galleriesRequestFailed(error.message));
    }
};

export const getGalleriesList = () => (state) => state.galleries.entities;
export const getGalleriesLoadingStatus = () => (state) => state.galleries.isLoading;

export default galleriesReducer;
