import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { LuSparkle } from "react-icons/lu";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { getBoardByBoardIdRequest } from "../../../apis/board/boardApis";
import { useNavigate, useParams } from "react-router-dom";

function BoardEditPage() {
    const [boardData, setBoardData] = useState({});
    const [contentInputValue, setContentInputValue] = useState("");
    const [titleInputValue, setTitleInputValue] = useState("");
    const { boardId } = useParams();
    const navigate = useNavigate();

    const contentInputChangeHandler = (e) => {
        setContentInputValue(e.target.value);
    };

    const titleInputChangeHandler = (e) => {
        setTitleInputValue(e.target.value);
    };

    const cancelOnClickHandler = () => {
        setTitleInputValue("");
        setContentInputValue("");
        navigate("/board/list");
    };

    useEffect(() => {
        getBoardByBoardIdRequest(boardId).then((response) => {
            if (response.data.status === "success") {
                setBoardData(response.data.data);
                setTitleInputValue(response.data.data.title)
                setContentInputValue(response.data.data.content)
            } else if (response.data.status === "failed") {
                alert(response.data.message);
            }
        });
    }, []);

    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <div>
                        <MdOutlineTipsAndUpdates />
                    </div>
                    <h1>어떤 이야기로 수정할까요?</h1>
                    <p>당신의 지식과 경험을 커뮤니티와 공유해보세요</p>
                </div>
                <div css={s.bottomContainer}>
                    <div css={s.innerBox}>
                        <div>
                            <label htmlFor="title">제목</label>
                            <input id="title" type="text" placeholder="제목을 입력해주세요." value={titleInputValue} onChange={titleInputChangeHandler} />
                        </div>
                        <div>
                            <label htmlFor="content">내용</label>
                            <textarea id="content" type="text" onChange={contentInputChangeHandler} value={contentInputValue} placeholder="내용을 입력해주세요." />
                        </div>
                        <div>
                            <span>{contentInputValue.length} 자</span>
                            <span>최소 10자 이상 작성해주세요</span>
                        </div>
                        <div>
                            <button onClick={cancelOnClickHandler}>취소</button>
                            <button>수정하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardEditPage;
