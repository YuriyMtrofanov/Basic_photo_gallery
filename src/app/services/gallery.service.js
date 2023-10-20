import httpService from "./http.service";

const galleryEndpoint = "gallery";

const galleryService = {
    getAllGalleries: async () => {
        const { data } = await httpService.get(galleryEndpoint + ".json");
        return data;
    },
    getCurrentGallery: async (id) => {
        const URL = `${galleryEndpoint}/${id}.json`;
        const { data } = await httpService.get(URL);
        return data;
    },
    createGallery: async (payload) => {
        const URL = `${galleryEndpoint}/${payload.id}.json`;
        const { data } = await httpService.put(URL, payload);
        return data;
    },
    updateGallery: async (payload) => {
        const URL = `${galleryEndpoint}/${payload.id}.json`;
        const { data } = await httpService.patch(URL, payload);
        return data;
    },
    deleteGallery: async (albumId) => {
        const URL = `${galleryEndpoint}/${albumId}.json`;
        const { data } = await httpService.delete(URL);
        return data;
    }
};

export default galleryService;
