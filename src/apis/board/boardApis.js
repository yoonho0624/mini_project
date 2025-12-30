import { instance } from "../utils/instance";

export const addBoardRequest = async (data) => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken")

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    })
    try {
        const response = await instance.post("/board/add", data)
        return response
    } catch (error) {
        return error.response
    }
};

export const getBoardRequest = async () => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken")

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    })
    try {
        const response = await instance.get("/board/list")
        return response
    } catch (error) {
        return error.response
    }
};

export const getBoardByBoardIdRequest = async (boardId) => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken")

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    })
    try {
        const response = await instance.get(`/board/${boardId}`)
        return response
    } catch (error) {
        return error.response
    }
};

export const getBoardByKeywordRequest = async (keyword) => {
    instance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem("AccessToken")

        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`
        }

        return config
    })
    try {
        const response = await instance.get(`/board/search?keyword=${keyword}`)
        return response
    } catch (error) {
        return error.response
    }
};
