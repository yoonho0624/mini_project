/** @jsxImportSource @emotion/react */
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import * as s from "./styles";
import SideBar from "../SideBar/SideBar";
import { useState } from "react";
import { usePrincipalState } from "../../store/usePrincipalState";

function MainHeader({ showSideBar, setShowSideBar }) {
    const { isLoggedIn, principal, login, logout } = usePrincipalState();
    const navigate = useNavigate();

    const onClickSigninHandler = () => {
        navigate("/auth/signin");
    };
    const onClickSignupHandler = () => {
        navigate("/auth/signup");
    };
    return (
        <div css={s.container}>
            <div css={s.leftBox}>
                <button onClick={() => setShowSideBar((prev) => !prev)}>
                    <IoMenu />
                </button>
                <div onClick={() => navigate("/")}>TechBoard</div>
            </div>
            <div css={s.rightBox}>
                {isLoggedIn ? (
                    <p>{principal.username}</p>
                ) : (
                    <>
                        <button onClick={onClickSigninHandler}>로그인</button>
                        <button onClick={onClickSignupHandler}>회원가입</button>
                    </>
                )}
            </div>
            <div css={s.sideBarContainer(showSideBar)}>
                <SideBar setShowSideBar={setShowSideBar} />
            </div>
        </div>
    );
}

export default MainHeader;
