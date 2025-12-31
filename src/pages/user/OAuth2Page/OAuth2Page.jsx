/** @jsxImportSource @emotion/react */
import { FcGoogle } from "react-icons/fc";
import * as s from "./styles";
import { IoLink } from "react-icons/io5";
import { LuUserPlus } from "react-icons/lu";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { SiNaver } from "react-icons/si";

function OAuth2Page() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [oAuth2UserData, setOAuth2UserData] = useState({
        provider: "",
        providerUserId: "",
        email: "",
    });

    useEffect(() => {
        setOAuth2UserData({
            provider: searchParams.get("provider"),
            providerUserId: searchParams.get("providerUserId"),
            email: searchParams.get("email"),
        });
    }, []);
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div css={s.topBox}>
                    <div>{searchParams.get("provider") === "google" ? <FcGoogle /> : <SiNaver />}</div>
                    <h4>
                        {searchParams.get("provider") === "google" ? "구글 " : "네이버 "}
                        계정 연동
                    </h4>
                    <p>{searchParams.get("provider") === "google" ? "구글" : "네이버"} 계정으로 로그인하시겠습니까?</p>
                </div>
                <div css={s.bottomBox}>
                    <button
                        onClick={() =>
                            navigate("/auth/oauth2/merge", {
                                state: oAuth2UserData,
                            })
                        }>
                        <IoLink />
                        <div>기존 계정과 연동</div>
                        <div>이미 가입한 계정과 {searchParams.get("provider") === "google" ? "구글을" : "네이버를"} 연결합니다.</div>
                    </button>
                    <button
                        onClick={() =>
                            navigate("/auth/oauth2/merge", {
                                state: oAuth2UserData,
                            })
                        }>
                        <LuUserPlus />
                        <div>새 계정으로 가입</div>
                        <div>{searchParams.get("provider") === "google" ? "구글" : "네이버"} 계정으로 새로 가입합니다.</div>
                    </button>
                    <button onClick={() => navigate("/auth/signin")}>취소</button>
                </div>
            </div>
        </div>
    );
}

export default OAuth2Page;
