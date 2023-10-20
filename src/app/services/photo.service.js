import httpService from "./http.service";

const photoEndpoint = "photo";

const photoService = {
    getAllPhotos: async () => {
        const { data } = await httpService.get(photoEndpoint + ".json");
        return data;
    },
    getCurrentPhoto: async (photoId) => {
        const URL = `${photoEndpoint}/${photoId}.json`;
        const { data } = await httpService.get(URL);
        return data;
    },
    addPhoto: async (payload) => {
        const URL = `${photoEndpoint}/${payload.id}.json`;
        const { data } = await httpService.put(URL, payload);
        return data;
    },
    updatePhoto: async (payload) => {
        const URL = `${photoEndpoint}/${payload.id}.json`;
        const { data } = await httpService.patch(URL, payload);
        return data;
    },
    deletePhoto: async (photoId) => {
        const URL = `${photoEndpoint}/${photoId}.json`;
        const { data } = await httpService.delete(URL);
        return data;
    }
};

export default photoService;
