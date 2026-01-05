import { instance } from "../utils/instance";

export const getUserListRequest = async () => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });
    try {
        const response = await instance.get("/admin/manage/user/list");
        return response;
    } catch (error) {
        return error.response;
    }
};

export const getUserByUsernameRequest = async (data) => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });
    try {
        const response = await instance.get(`/admin/manage/user/${data}`);
        return response;
    } catch (error) {
        return error.response;
    }
};
