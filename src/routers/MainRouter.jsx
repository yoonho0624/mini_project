import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/user/MainPage/MainPage";
import Layout from "../components/Layout/Layout";
import AuthRouter from "./AuthRouter";
import BoardRouter from "./BoardRouter";
import { getPrincipal } from "../apis/auth/authApis";
import { useQuery } from "@tanstack/react-query";
import { usePrincipalState } from "../store/usePrincipalState";

function MainRouter() {
    const accessToken = localStorage.getItem("AccessToken");
    const [showSideBar, setShowSideBar] = useState(false);
    const { isLoggedIn, principal, login, logout } = usePrincipalState();
    const { data, isLoading } = useQuery({
        queryKey: ["getPrincipal"],
        queryFn: getPrincipal,
        refetch: 1,
        enabled: !!accessToken,
    });

    useEffect(() => {
        if (data?.data?.status === "success") {
            login(data?.data.data);
        }
    }, [data, login]);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout
                            showSideBar={showSideBar}
                            setShowSideBar={setShowSideBar}
                            principal={data}>
                            <MainPage
                                showSideBar={showSideBar}
                                setShowSideBar={setShowSideBar}
                            />
                        </Layout>
                    }
                />
                <Route path="/auth/*" element={<AuthRouter />} />
                <Route
                    path="/board/*"
                    element={
                        <Layout
                            showSideBar={showSideBar}
                            setShowSideBar={setShowSideBar}
                            principal={data}>
                            <BoardRouter />
                        </Layout>
                    }
                />
            </Routes>
        </>
    );
}

export default MainRouter;
