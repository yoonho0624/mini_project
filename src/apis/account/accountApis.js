import { instance } from "../utils/instance";

export const changeProfileImg = async (data) => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken")

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    })
    try {
        const response = await instance.post("/user/account/change/profileImg", data)
        return response
    } catch (error) {
        return error.response
    }
};