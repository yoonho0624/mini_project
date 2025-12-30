import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { IoArrowBack } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import { getBoardByBoardIdRequest } from "../../../apis/board/boardApis";

function BoardDetailPage() {
    const [boardData, setBoardData] = useState({});
    const { boardId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getBoardByBoardIdRequest(boardId).then((response) => {
            if (response.data.status === "success") {
                setBoardData(response.data.data)
            } else if (response.data.status === "failed") {
                alert(response.data.message)
            }
        })
    }, [])
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate("/board/list")}>
                        <IoArrowBack />
                        목록으로
                    </button>
                </div>
                <div>
                    <div css={s.topBox}>
                        <h4>{boardData.title}</h4>
                        <div css={s.boardBottomBox}>
                            <div>
                                <div>김</div>
                                <p>{boardData.username}</p>
                            </div>
                            <div>
                                <p>{boardData.createDt}</p>
                            </div>
                        </div>
                    </div>
                    <div css={s.bottomBox}>
                        <p>
                            {boardData.content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailPage;
