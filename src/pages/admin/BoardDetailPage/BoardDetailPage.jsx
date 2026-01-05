/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import * as s from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { getBoardByBoardIdRequest, removeBoardByBoardIdRequest } from "../../../apis/board/boardApis";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function BoardDetailPage() {
    const [boardData, setBoardData] = useState({});
    const { boardId } = useParams();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData(["getPrincipal"])?.data?.data;
    const navigate = useNavigate();

    const removeBoardByBoardIdMutation = useMutation({
        mutationKey: ["removeBoardByBoardId"],
        mutationFn: removeBoardByBoardIdRequest,
        onSuccess: async (response) => {
            if (response.data.status === "success") {
                await queryClient.refetchQueries({ queryKey: ["getBoardList"] });
                alert(response.data.message);
                navigate("/admin/manage/board");
            } else if (response.data.status === "failed") {
                alert(response.data.message);
                return;
            }
        },
    });

    const removeOnClickHandler = () => {
        if (!confirm("게시물을 삭제하시겠습니까?")) {
            return;
        }

        removeBoardByBoardIdMutation.mutate({
            boardId: boardId,
            userId: principalData?.userId,
        });
    };

    useEffect(() => {
        getBoardByBoardIdRequest(boardId).then((response) => {
            if (response.data.status === "success") {
                setBoardData(response.data.data);
            } else if (response.data.status === "failed") {
                alert(response.data.message);
            }
        });
    }, []);
    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div>
                    <button onClick={() => navigate("/admin/manage/board")}>
                        <IoArrowBack />
                        목록으로
                    </button>
                </div>
                <div>
                    <div css={s.topBox}>
                        <div>
                            <button onClick={removeOnClickHandler}>삭제</button>
                        </div>
                        <h4>{boardData.title}</h4>
                        <div css={s.boardBottomBox}>
                            <div>
                                <div>
                                    <img src={boardData.profileImg} alt="profileImg" />
                                </div>
                                <p>{boardData.username}</p>
                            </div>
                            <div>
                                <p>작성일 : {boardData.createDt}</p>
                                {boardData.updateDt && <p>수정일 : {boardData.updateDt}</p>}
                            </div>
                        </div>
                    </div>
                    <div css={s.bottomBox}>
                        <p>{boardData.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardDetailPage;
