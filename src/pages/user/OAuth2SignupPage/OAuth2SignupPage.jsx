import { FcGoogle } from "react-icons/fc";
import * as s from "./styles";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { oAuth2SignupRequest } from "../../../apis/auth/oAuth2Api";
import { IoArrowBack } from "react-icons/io5";

export default function OAuth2SignupPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [signupInputValue, setSignupInputValue] = useState({
        username: "",
        email: "",
        password: "",
        passwordConfirm: "",
    });

    const inputOnChangeHandler = (e) => {
        const { name, value } = e.target;
        setSignupInputValue((prev) => {
            return {
                ...prev,
                [name]: value,
            };
        });
    };
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,16}$/;
    // 8자 이상 16자 미만, 영문자, 숫자 및 특수 문자 포함
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
    // 이메일 형식

    const signupOnClickHandler = () => {
        if (
            signupInputValue.username.trim().length === 0 ||
            signupInputValue.email.trim().length === 0 ||
            signupInputValue.password.trim().length === 0 ||
            signupInputValue.passwordConfirm.trim().length === 0
        ) {
            alert("모든 항목을 입력해주세요.");
            return;
        }
        if (!emailRegex.test(signupInputValue.email)) {
            alert("이메일 형식에 맞게 입력해주세요.");
            return;
        }

        if (!passwordRegex.test(signupInputValue.password)) {
            alert("비밀번호는 8자 이상 16자 미만, 영문자, 숫자 및 특수 문자 포함해주세요.");
            return;
        }
        if (signupInputValue.password !== signupInputValue.passwordConfirm) {
            alert("비밀번호가 일치하지 않습니다.");
            return;
        }

        if (!confirm("회원가입하시겠습니까?")) {
            return;
        }

        oAuth2SignupRequest({
            username: signupInputValue.username,
            email: signupInputValue.email,
            password: signupInputValue.password,
            provider: location.state.provider,
            providerUserId: location.state.providerUserId
        })
            .then((response) => {
                if (response.data.status === "success") {
                    alert(response.data.message);
                    navigate("/auth/signin");
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
                    <button onClick={() => navigate(-1)}>
                        <IoArrowBack />
                        뒤로가기
                    </button>
                </div>
                <div css={s.signupBox}>
                    <div css={s.topBox}>
                        <h4>회원가입</h4>
                        <p>TechBoard와 함께 시작하세요</p>
                    </div>
                    <div css={s.bottomBox}>
                        <div>
                            <label htmlFor="">이름</label>
                            <input
                                name="username"
                                type="text"
                                placeholder="사용자 이름을 입력해주세요."
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.username}
                            />
                        </div>
                        <div>
                            <label htmlFor="">이메일</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="이메일을 입력해주세요."
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.email}
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호</label>
                            <input
                                name="password"
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.password}
                            />
                        </div>
                        <div>
                            <label htmlFor="">비밀번호 확인</label>
                            <input
                                name="passwordConfirm"
                                type="password"
                                placeholder="비밀번호를 다시 입력해주세요."
                                onChange={inputOnChangeHandler}
                                value={signupInputValue.passwordConfirm}
                            />
                        </div>

                        <button onClick={signupOnClickHandler}>회원가입</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
