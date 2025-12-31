import React from "react";
import { Route, Routes } from "react-router-dom";
import OAuth2Page from "../pages/user/OAuth2Page/OAuth2Page";
import OAuth2MergePage from "../pages/user/OAuth2MergePage/OAuth2MergePage";
import OAuth2SigninPage from "../pages/user/OAuth2SigninPage/OAuth2SigninPage";
import OAuth2SignupPage from "../pages/user/OAuth2SignupPage/OAuth2SignupPage";

function OAuth2Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<OAuth2Page />} />
                <Route path="/merge" element={<OAuth2MergePage />} />
                <Route path="/signin" element={<OAuth2SigninPage />} />
                <Route path="/signup" element={<OAuth2SignupPage />} />
            </Routes>
        </>
    );
}

export default OAuth2Router;
