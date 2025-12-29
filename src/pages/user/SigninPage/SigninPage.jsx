import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { IoArrowBack } from "react-icons/io5";
import { SiNaver } from "react-icons/si";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { signinRequest } from "../../../apis/auth/authApis";

function SigninPage() {
    const navigate = useNavigate();
    const [signinInputValue, setSigninInputValue] = useState({
        email: "",
        password: "",
    });

    const signinInputOnChangeHandler = (e) => {
        const { name, value } = e.target;
        setSigninInputValue((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    const signinOnClickHandler = () => {
        if (
            signinInputValue.email.trim().length === 0 ||
            signinInputValue.password.trim().length === 0
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        signinRequest({
            email: signinInputValue.email,
            password: signinInputValue.password,
        })
            .then((response) => {
                if (response.data.status === "success") {
                    localStorage.setItem("AccessToken", response.data.data);
                    window.location.href = "/";
                } else if (response.data.status === "failed") {
                    alert(response.data.message);
                    return;
                }
            })
            .catch((error) => {
                alert("문제가 발생했습니다. 다시 시도해주세요.");
                return;
            });
    };
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate("/")}>
                        <IoArrowBack />홈
                    </button>
                </div>
                <div css={s.signinBox}>
                    <div css={s.topBox}>
                        <h4>로그인</h4>
                        <p>TechBoard에 오신 것을 환영합니다.</p>
                    </div>
                    <div css={s.bottomBox}>
                        <div css={s.inputBox}>
                            <div>
                                <label htmlFor="">이메일</label>
                                <input
                                    name="email"
                                    id="email"
                                    type="email"
                                    placeholder="이메일을 입력해주세요."
                                    onChange={signinInputOnChangeHandler}
                                />
                            </div>
                            <div>
                                <label htmlFor="">비밀번호</label>
                                <input
                                    name="password"
                                    id="password"
                                    type="password"
                                    placeholder="비밀번호를 입력해주세요."
                                    onChange={signinInputOnChangeHandler}
                                />
                            </div>
                            <button onClick={signinOnClickHandler}>로그인</button>
                        </div>
                        <div css={s.lineBox}>
                            <span>또는</span>
                        </div>
                        <div css={s.buttonBox}>
                            <button onClick={() => navigate("/auth/oauth2")}>
                                <FcGoogle />
                                구글로 로그인
                            </button>
                            <button>
                                <SiNaver />
                                네이버로 로그인
                            </button>
                        </div>
                        <div css={s.signupBox}>
                            <span>계정이 없으신가요?</span>
                            <Link to={"/auth/signup"}>회원가입</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SigninPage;
