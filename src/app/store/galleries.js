import { createAction, createSlice } from "@reduxjs/toolkit";

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
        // galleryCreateRequested: () => {}, // через createAction
        galleryCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        // galleryCreateFailed: () => {},
        // galleryEditRequested: () => {},
        galleryEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((gallery) =>
                gallery.id === action.payload.id
            )] = action.payload;
        },
        // galleryEditFailed: () => {},
    }
});

const { reducer: galleriesReducer, actions } = galleriesSlice;
const { galleriesRequested, galleriesReceived, galleriesRequestFailed} = actions;