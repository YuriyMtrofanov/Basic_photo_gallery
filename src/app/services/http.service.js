import axios from "axios";
import configFile from "../config.json";
import transformData from "../utils/transformData";

const http = axios.create({
    baseURL: configFile.apiEndpoint
}); // задаем базовый URL для запросов

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
