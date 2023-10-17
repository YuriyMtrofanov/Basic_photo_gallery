import { combineReducers, configureStore } from "@reduxjs/toolkit";
import galleriesReducer from "./galleries";

const rootReducer = combineReducers({
    // photos: photosReducer,
    galleries: galleriesReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
};
