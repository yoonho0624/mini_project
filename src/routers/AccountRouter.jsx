import React from "react";
import { Route, Routes } from "react-router-dom";
import ProfilePage from "../pages/user/ProfilePage/ProfilePage";
import ChangePasswordPage from "../pages/user/ChangePasswordPage/ChangePasswordPage";

function AccountRouter() {
    return (
        <div>
            <Routes>
                <Route path="/:username" element={<ProfilePage />} />
                <Route path="/change/password" element={<ChangePasswordPage />}/>
            </Routes>
        </div>
    );
}

export default AccountRouter;
