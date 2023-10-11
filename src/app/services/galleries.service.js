import httpService from "./http.service";

const galleriesEndpoint = "gallery/";

const galleriesService = {
    get: async () => {
        const { data } = await httpService.get(galleriesEndpoint);
        return data;
    }
};

export default galleriesService;
