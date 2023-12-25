import axios from "axios";
import configFile from "../config.json";
import transformData from "../utils/transformData";
import localStorageService from "./localStorage.service";
import authService from "./auth.service";

// создаем отдельную ветку компонента axios, чтобы перезватывать запросы и вносить изменния
// именно в эту ветку. Назовем её http и будем в дальнейшем использовать её при запросах
// отдельную ветку сделаем для authService
const http = axios.create({
    baseURL: configFile.apiEndpoint
}); // задаем базовый URL для запросов

// Перехват запроск к серверу
http.interceptors.request.use(
    async function (config) {
        const refreshToken = localStorageService.getRefreshToken();
        const expiresDate = localStorageService.getExpiresDateToken();
        if (configFile.isFirebase) {
            // проверка срока службы access_token-а и запрос на его обновление
            if (refreshToken && expiresDate < Date.now()) {
                const data = await authService.refresh({
                    grant_type: "refresh_token",
                    refresh_token: refreshToken
                });
                localStorageService.setTokens({
                    idToken: data.id_token,
                    refreshToken: data.refresh_token,
                    expiresIn: data.expires_in,
                    localId: data.user_id
                });
            }
        }
        return config;
    }
);

// Перехват ответа от сервера и отработка ошибок ответов
http.interceptors.response.use(
    (res) => {
        if (configFile.isFirebase) {
            res.data = { content: transformData(res.data) };
            // в данном случае мы получаем объект res.data = { data: {{}, {}, {}} }
            // и мы его приводим к виду res.data = { content: [{}, {}, {}] }
            // то есть изначально получаем объект data и трансформируем его в массив content
        }
        return res;
    },
    function (error) {
        const expectedErrors =
            error.response &&
            error.response.status >= 400 &&
            error.response.status < 500;
        if (!expectedErrors) {
            console.error("error", error);
        }
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    patch: http.patch,
    delete: http.delete
};

export default httpService;
