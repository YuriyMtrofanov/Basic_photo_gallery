import httpService from "./http.service";

const galleryEndpoint = "gallery";

const galleryService = {
    getAlbums: async () => {
        const { data } = await httpService.get(galleryEndpoint + ".json");
        return data;
    },
    getCurrentAlbum: async (id) => {
        const URL = `${galleryEndpoint}/${id}.json`;
        const { data } = await httpService.get(URL);
        return data;
    },
    createAlbum: async (payload) => {
        const URL = `${galleryEndpoint}/${payload.id}.json`;
        const { data } = await httpService.put(URL, payload);
        return data;
    },
    updateAlbum: async (payload) => {
        const URL = `${galleryEndpoint}/${payload.id}.json`;
        const { data } = await httpService.patch(URL, payload);
        return data;
    }
};

export default galleryService;
