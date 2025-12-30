import React, { useRef, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { useNavigate } from "react-router-dom";
import { usePrincipalState } from "../../../store/usePrincipalState";
import { ref } from "firebase/storage";
import { storage } from "../../../apis/config/firebaseConfig";
import { v4 as uuid } from "uuid";
import { getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { changeProfileImg } from "../../../apis/account/accountApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function ProfilePage() {
    const [progress, setProgress] = useState(0)
    const [isUploading, setIsUploading] = useState(false)
    const navigate = useNavigate();
    const { isLoggedIn, principal, loading, login, logout } = usePrincipalState();
    const imgInputRef = useRef();
    const queryClient = useQueryClient();
    function onRefresh() {
        queryClient.invalidateQueries({ queryKey: ["getPrincipal"] });
    };

    const changeProfileImgMutation = useMutation({
        mutationKey: "changeProfileImg",
        mutationFn: changeProfileImg,
        onSuccess: (response) => {
            if (response.data.status === "success") {
                alert("프로필 이미지가 변경되었습니다.");
                isUploading(false)
                onRefresh()
            } else if (response.data.status === "failed") {
                alert(response.data.message)
                isUploading(false)
                return
            }
        },
        onError: (error) => {
            isUploading(false)
            alert("문제가 발생했습니다. 다시 시도해주세요.")
            return
        }
    });

    const onChangeFileHandler = (e) => {
        const file = e.target.files[0];
        if (!confirm("프로필 이미지를 변경하시겠습니까?")) {
            return;
        }

        setIsUploading(true)

        const imageRef = ref(storage, `profile-img/${uuid()}_${file.name.split(".").pop()}`);

        const uploadTask = uploadBytesResumable(imageRef, file);

        // 업로드 상태 변화를 감지하는 이벤트 리스너를 등록
        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progressPercent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
                console.log(progressPercent)
                setProgress(progressPercent)
            },
            (error) => {
                isUploading(false)
                alert("업로드 중 에러가 발생했습니다.");
            },
            async () => {
                try {
                    const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
                    changeProfileImgMutation.mutate({
                        userId: principal.userId,
                        profileImg: downloadUrl,
                    })
                } catch (error) {
                    isUploading(false)
                    alert("이미지 URL을 가져오는데 문제가 발생했습니다.")
                }
            }
        );
    };

    const onClickProfileImgHandler = () => {
        imgInputRef.current.click();
    };

    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <button onClick={() => navigate("/")}>홈으로</button>
                <h1>마이페이지</h1>
                <div css={s.profileBox}>
                    <div css={s.profileTopBox}>
                        <div>
                            <div css={s.profileImg}>
                                <img
                                    src={principal?.profileImg}
                                    alt="profileImg"
                                    onClick={onClickProfileImgHandler}
                                />
                                <input type="file" accept="image/*" ref={imgInputRef} onChange={onChangeFileHandler} />
                            </div>
                            <div>
                                <h3>{principal?.username}</h3>
                                <p>{principal?.email}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => logout()}>로그아웃</button>
                        </div>
                    </div>
                    <div css={s.profileBottomBox}>
                        <div>작성한 게시물</div>
                        <p>3</p>
                    </div>
                </div>
                <div css={s.profileSettingBox}>
                    <div>
                        <h3>계정 설정</h3>
                        <p>계정 보안 및 정보를 관리하세요</p>
                    </div>
                    <div css={s.settingButtonBox}>
                        <button>비밀번호 변경</button>
                        <button>이메일 인증</button>
                        <button>회원탈퇴</button>
                    </div>
                </div>
                <div css={s.profileBoardBox}>
                    <div>
                        <h3>내가 작성한 게시물</h3>
                        <p>총 0개의 게시물을 작성했습니다.</p>
                    </div>
                    <div css={s.boardBox}>
                        <p>작성한 게시물이 없습니다.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
