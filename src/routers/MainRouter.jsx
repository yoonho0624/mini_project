import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/user/MainPage/MainPage";
import Layout from "../components/Layout/Layout";
import AuthRouter from "./AuthRouter";
import BoardRouter from "./BoardRouter";
import { useQuery } from "@tanstack/react-query";
import { getPrincipal } from "../apis/auth/authApis";
import { usePrincipalState } from "../store/usePrincipalState";
import AccountRouter from "./AccountRouter";
import ProtectedRouter from "./ProtectedRouter";

function MainRouter() {
    const accessToken = localStorage.getItem("AccessToken");
    const { isLoggedIn, principal, loading, login, logout, setLoading } = usePrincipalState();
    const { data, isLoading, refetch } = useQuery({
        queryKey: ["getPrincipal"],
        queryFn: getPrincipal,
        refetch: 1,
        enabled: !!accessToken,
    });

    useEffect(() => {
        if (data?.data.status === "success") {
            login(data?.data.data);
        }
    }, [data, login]);

    useEffect(() => {
        setLoading(isLoading);
    }, [isLoading]);

    return (
        <>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <MainPage />
                        </Layout>
                    }
                />
                <Route
                    path="/board/*"
                    element={
                        <ProtectedRouter>
                            <Layout>
                                <BoardRouter />
                            </Layout>
                        </ProtectedRouter>
                    }
                />
                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRouter>
                            <Layout>
                                <AccountRouter />
                            </Layout>
                        </ProtectedRouter>
                    }
                />
                <Route path="/auth/*" element={<AuthRouter />} />
            </Routes>
        </>
    );
}

export default MainRouter;
