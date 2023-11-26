import httpService from "./http.service";

const userEndpoint = "user";

const userService = {
    getAllUsers: async () => {
        const URL = `${userEndpoint}.json`;
        const { data } = await httpService.get(URL);
        return data;
    },
    getCurrentUser: async (id) => {
        const URL = `${userEndpoint}/${id}.json`;
        const { data } = await httpService.get(URL);
        return data;
    },
    createUser: async (payload) => {
        const URL = `${userEndpoint}/${payload.id}.json`;
        const { data } = await httpService.put(URL, payload);
        return data;
    },
    updateUser: async (payload) => {
        const URL = `${userEndpoint}/${payload.id}.json`;
        const { data } = await httpService.post.apply(URL, payload);
        return data;
    },
    deleteUser: async (id) => {
        const URL = `${userEndpoint}/${id}.json`;
        const { data } = await httpService.delete(URL);
        return data;
    }
};

export default userService;
