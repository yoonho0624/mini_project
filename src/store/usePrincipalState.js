import { create } from "zustand";

export const usePrincipalState = create((set, get) => ({
    isLoggedIn: false,
    principal: null,
    login: (userData) => set({ isLoggedIn: true, principal: userData }),
    logout: () => {
        localStorage.removeItem("AccessToken");
        set({ isLoggedIn: false, principal: null });
        window.location.href = "/auth/signin";
    },
}));
