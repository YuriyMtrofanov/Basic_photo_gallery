import {
    createAction,
    createSlice
} from "@reduxjs/toolkit";
import userService from "../services/user.service";
// import authService from "../services/auth.service";
// import localStorageService from "../services/localStorage.service";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
        // auth: null,
        // isLoggedIn: false,
        // dataLoaded: false
    },
    redusers: {
        usersRequested: (state) => {
            state.isLoading = true;
        },
        usersReceived: (state, action) => {
            state.entities = action.payload;
            state.isLoading = false;
            state.dataLoaded = true;
            state.error = null;
        },
        usersRequestFailed: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        },
        userCreated: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities.push(action.payload);
        },
        userEdited: (state, action) => {
            if (!Array.isArray(state.entities)) {
                state.entities = [];
            }
            state.entities[state.entities.findIndex((user) =>
                user.id === action.payload.id
            )] = action.payload;
        },
        userDeleted: (state, action) => {
            state.entities = state.entities.filter((user) =>
                user.id !== action.payload
            );
        }
        // authRequested: () => {},
        // authRequestSucceeded: (state, action) => {
        //     state.auth = action.payload;
        //     state.isLoggedIn = true;
        // },
        // authRequestFailed: (state, action) => {
        //     state.error = action.payload.error;
        // }
    }
});

const { reducer: usersReducer, actions } = usersSlice;
const {
    usersRequested,
    usersReceived,
    usersRequestFailed,
    userCreated,
    userEdited,
    userDeleted
    // authRequestSucceeded,
    // authRequestFailed
} = actions;

const userCreateRequested = createAction("users/userCreateRequested");
const userCreateFailed = createAction("users/userCreateFailed");
const userEditRequested = createAction("users/userEditRequested");
const userEditFailed = createAction("users/userEditFailed");
const userDeleteRequested = createAction("users/userDeleteRequested");
const userDeleteFailed = createAction("users/userDeleteFailed");
// const authRequested = createAction("users/authRequested");

export const loadUsersList = () => async (dispatch) => {
    dispatch(usersRequested());
    try {
        const { content } = await userService.getAllUsers();
        dispatch(usersReceived(content));
    } catch (error) {
        dispatch(usersRequestFailed(error.message));
    }
};

// export const createUser = (payload) => async (dispatch) => {
//     dispatch(userCreateRequested());
//     try {
//         const { content } = await userService.createUser(payload);
//         dispatch(userCreated(content));
//     } catch (error) {
//         dispatch(userCreateFailed(error.message));
//     }
// };
export const createUser = (payload) => async (dispatch) => {
    dispatch(userCreateRequested());
    // dispatch(authRequested());
    try {
        const { content } = await userService.createUser(payload);
        // const data = await authService.signUp(payload);
        dispatch(userCreated(content));
        // dispatch(authRequestSucceeded({ userId: content.id }));
        // localStorageService.setTokens(data);
    } catch (error) {
        dispatch(userCreateFailed(error.message));
        // dispatch(authRequestFailed(error.message));
    }
};

export const editUser = (payload) => async (dispatch) => {
    dispatch(userEditRequested());
    try {
        const { content } = await userService.updateUser(payload);
        dispatch(userEdited(content));
    } catch (error) {
        dispatch(userEditFailed(error.message));
    }
};

export const deleteUser = (id) => async (dispatch) => {
    dispatch(userDeleteRequested());
    try {
        const { content } = await userService.deleteUser(id);
        if (!content) {
            dispatch(userDeleted(content));
        }
    } catch (error) {
        dispatch(userDeleteFailed(error.message));
    }
};

export const getAllUsers = () => (state) => state.users.entities;
export const getUsersLoadingStatus = () => (state) => state.users.isLoading;
export const getCurrentUser = (id) => (state) => state.users.entities.find(user => user.id === id);

export default usersReducer;
