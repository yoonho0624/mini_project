import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { LuSparkle } from "react-icons/lu";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { getBoardByBoardIdRequest, modifyBoardByBoardIdRequest, removeBoardByBoardIdRequest } from "../../../apis/board/boardApis";
import { useNavigate, useParams } from "react-router-dom";
import { usePrincipalState } from "../../../store/usePrincipalState";

function BoardEditPage() {
    const { principal } = usePrincipalState();
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
        navigate(`/profile/${principal.username}`);
    };

    const removeOnClickHandler = () => {
        if (!confirm("정말로 게시물을 삭제하시겠습니까?")) {
            return
        }

        removeBoardByBoardIdRequest({
            userId: principal.userId,
            boardId: boardId
        }).then((response) => {
            if (response.data.status === "success") {
                alert("게시물이 삭제 되었습니다.");
                navigate(`/profile/${principal.username}`);
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                return;
            }
        }
    )}

    useEffect(() => {
        getBoardByBoardIdRequest(boardId).then((response) => {
            if (response.data.status === "success") {
                setTitleInputValue(response.data.data.title);
                setContentInputValue(response.data.data.content);
            } else if (response.data.status === "failed") {
                alert(response.data.message);
            }
        });
    }, []);

    const editOnClickHandler = () => {
        if (titleInputValue.trim().length === 0 || contentInputValue.trim().length === 0) {
            alert("모든 항목을 입력해주세요.");
            return;
        }

        modifyBoardByBoardIdRequest({
            title: titleInputValue,
            content: contentInputValue,
            userId: principal.userId,
            boardId: boardId,
        }).then((response) => {
            if (response.data.status === "success") {
                alert("게시물이 수정 되었습니다.");
                navigate(`/board/${boardId}`);
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                return;
            }
        });
    };

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
                            <textarea
                                id="content"
                                type="text"
                                onChange={contentInputChangeHandler}
                                value={contentInputValue}
                                placeholder="내용을 입력해주세요."
                            />
                        </div>
                        <div>
                            <span>{contentInputValue.length}자</span>
                            <span>최소 10자 이상 작성해주세요</span>
                        </div>
                        <div>
                            <button onClick={removeOnClickHandler}>삭제하기</button>
                            <div>
                                <button onClick={cancelOnClickHandler}>취소</button>
                                <button onClick={editOnClickHandler}>수정하기</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BoardEditPage;
