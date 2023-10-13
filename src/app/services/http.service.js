import axios from "axios";
import configFile from "../config.json";
import transformData from "../utils/transformData";

const http = axios.create({
    baseURL: configFile.apiEndpoint
}); // задаем базовый URL для запросов

// Перехват запроса и отработка ошибок запросов
// Этот метод необходим для того, чтобы изменить эндпойнт запроса под
// требования firebase. То есть из galleries/ сделать galleries.json
// - отследить "/" и заменить его на ".json" (п. 2.1 конспекта)
// http.interceptors.response.use(
//     async function ({ config }) {
//         console.log("config.url", config);
//         // но данный блок кода должен быть применен только при использовании firebase
//         if (configFile.isFirebase) {
//             const containSlash = /\/$/gi.test(config.url); // проверяем наличие "/" в конце URL
//             config.url = (containSlash ? config.url.slice(0, -1) : config.url) + ".json";
//             // если "/" есть, то мы его обрезаем (slice(0, -1)) и добавляем + ".json"
//             // если "/" нет, то мы возвращаем config.url и добавляем ".json" в конец
//         }
//         return config;
//     },
//     function (error) {
//         return Promise.reject(error);
//     }
// );

// Перехват ответа от сервера и отработка ошибок ответов
http.interceptors.response.use(
    (res) => {
        if (configFile.isFireBase) {
            res.data = { content: transformData(res.data) };
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
