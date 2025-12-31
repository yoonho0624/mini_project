import { instance } from "../utils/instance";

export const changeProfileImg = async (data) => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });
    try {
        const response = await instance.post("/user/account/change/profileImg", data);
        return response;
    } catch (error) {
        return error.response;
    }
};

export const emailSendRequest = async () => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });
    try {
        const response = await instance.post("/mail/send");
        return response;
    } catch (error) {
        return error.response;
    }
};

export const withdrawRequest = async () => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });
    try {
        const response = await instance.post("/user/account/withdraw");
        return response;
    } catch (error) {
        return error.response;
    }
};

export const changePasswordRequest = async (data) => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken");

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }

        return config;
    });
    try {
        const response = await instance.post("/user/account/change/password", data);
        return response;
    } catch (error) {
        return error.response;
    }
};
