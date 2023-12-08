import axios from "axios";
import configFile from "../config.json";
// import { setTokens } from "./localStorage.service";
// import userService from "./user.service";

const apiKey = "AIzaSyDa6XZtyVsTy77gFKP8FDwI48KEfio9Uuc";
const authEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`; // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
const loginEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;

// В данном случае создается отдельная ветка библиотеки т.к. при использовании ветки http происходит
// перехват и преобразование данных
const httpAuth = axios.create({
    baseURL: configFile.apiEndpoint + "/auth/"
});

// export async function register (payload) {
//     const { email, password } = payload;
//     const { data } = await httpAuth.post(authEndpoint, {
//         email: email,
//         password: password,
//         returnSecureToken: true
//     });
//     return data;
// };

const authService = {
    // register
    // signUp: async (payload) => {
    //     // const { email, password, ...rest } = payload;
    //     const { email, password, ...rest } = payload;
    //     try {
    //         const { data } = await httpAuth.post(authEndpoint, {
    //             email: email,
    //             password: password,
    //             returnSecureToken: true
    //         });
    //         console.log("auth service data", data);
    //         setTokens(data);
    //         const outputData = {
    //             id: data.localId,
    //             email: email,
    //             ...rest
    //         };
    //         await userService.createUser(outputData);
    //         // return data;
    //     } catch (error) {
    //         const { code, message } = error.response.data.error;
    //         // console.log("error", code, message);
    //         if (code === 400) {
    //             if (message === "EMAIL_EXISTS") {
    //                 const errorObject = {
    //                     email: "Пользователь с данным email уже существует"
    //                 };
    //                 // throw errorObject;
    //                 console.log("error", errorObject.email);
    //             }
    //         }
    //     }
    // },
    register: async (payload) => {
        const { data } = await httpAuth.post(authEndpoint, payload);
        return data;
    },
    login: async (payload) => {
        const { email, password } = payload;
        const { data } = await httpAuth.post(loginEndpoint, {
            email: email,
            password: password,
            returnSecureToken: true
        });
        console.log("login data", data);
        return data;
    }
};

export default authService;
