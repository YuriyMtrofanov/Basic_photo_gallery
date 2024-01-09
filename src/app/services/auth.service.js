import axios from "axios";
import configFile from "../config.json";

const apiKey = "AIzaSyDa6XZtyVsTy77gFKP8FDwI48KEfio9Uuc";
const authEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`; // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password
const loginEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
const refreshEndpoint = `https://securetoken.googleapis.com/v1/token?key=${apiKey}`;

// В данном случае создается отдельная ветка библиотеки т.к. при использовании ветки http происходит
// перехват и преобразование данных
export const httpAuth = axios.create({
    baseURL: configFile.apiEndpoint + "/auth/"
});

const authService = {
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
        return data;
    },
    refresh: async (payload) => {
        const { data } = await httpAuth.post(refreshEndpoint, payload);
        return data;
    }
};

export default authService;
