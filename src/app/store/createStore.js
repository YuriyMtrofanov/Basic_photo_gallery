import { combineReducers, configureStore } from "@reduxjs/toolkit";
import galleriesReducer from "./galleries";
import photosReducer from "./photos";
import usersReducer from "./users";

const rootReducer = combineReducers({
    photos: photosReducer,
    galleries: galleriesReducer,
    users: usersReducer
});

export function createStore() {
    return configureStore({
        reducer: rootReducer
    });
};
