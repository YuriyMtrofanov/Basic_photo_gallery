// import httpService from "./http.service";
import axios from "axios";
import configFile from "../config.json";

const apiKey = "AIzaSyDa6XZtyVsTy77gFKP8FDwI48KEfio9Uuc";
const authEndpoint = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`; // https://firebase.google.com/docs/reference/rest/auth#section-create-email-password

// В данном случае создается отдельная ветка библиотеки т.к. при использовании ветки http происходит
// перехват и преобразование данных
const httpAuth = axios.create({
    baseURL: configFile.apiEndpoint
});
const authService = {
    signUp: async (payload) => {
        const { email, password } = payload;
        const { data } = await httpAuth.post(authEndpoint, {
            email: email,
            password: password,
            returnSecureToken: true
        });
        console.log("signUp data", data);
    }
};

export default authService;
