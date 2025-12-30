import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { LuSparkle } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { usePrincipalState } from "../../../store/usePrincipalState";
import { addBoardRequest } from "../../../apis/board/boardApis";

function BoardAddPage() {
    const navigate = useNavigate();
    const { isLoggedIn, principal, loading, login, logout } = usePrincipalState();
    const [contentInputValue, setContentInputValue] = useState("");
    const [titleInputValue, setTitleInputValue] = useState("");

    const contentInputChangeHandler = (e) => {
        setContentInputValue(e.target.value);
    };

    const titleInputChangeHandler = (e) => {
        setTitleInputValue(e.target.value);
    };

    const submitOnClickHandler = () => {
        if (titleInputValue.trim().length === 0 || contentInputValue.trim().length === 0) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        addBoardRequest({
            title: titleInputValue,
            content: contentInputValue,
            userId: principal.userId,
        }).then((response) => {
            if (response.data.status === "success") {
                alert("게시물이 추가 되었습니다.");
                navigate("/board/list");
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                return;
            }
        });
    };

    const cancelOnClickHandler = () => {
        setTitleInputValue("")
        setContentInputValue("")
        navigate("/board/list")
    }

    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <div>
                        <LuSparkle />
                    </div>
                    <h1>새로운 이야기를 시작하세요.</h1>
                    <p>당신의 지식과 경험을 커뮤니티와 공유해보세요</p>
                </div>
                <div css={s.bottomContainer}>
                    <div css={s.innerBox}>
                        <div>
                            <label htmlFor="title">제목</label>
                            <input id="title" type="text" placeholder="제목을 입력해주세요." onChange={titleInputChangeHandler} />
                        </div>
                        <div>
                            <label htmlFor="content">내용</label>
                            <textarea id="content" type="text" onChange={contentInputChangeHandler} placeholder="내용을 입력해주세요." />
                        </div>
                        <div>
                            <span>{contentInputValue.length} 자</span>
                            <span>최소 10자 이상 작성해주세요</span>
                        </div>
                        <div>
                            <button onClick={cancelOnClickHandler}>취소</button>
                            <button onClick={submitOnClickHandler}>게시하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardAddPage;
