import React from "react";
/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { FiUser } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaChartBar } from "react-icons/fa";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getUserListRequest } from "../../../apis/admin/adminApis";
import { getBoardRequest } from "../../../apis/board/boardApis";
import { useNavigate } from "react-router-dom";
import { usePrincipalState } from "../../../store/usePrincipalState";

function DashBoardPage() {
    const { logout } = usePrincipalState();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const principalData = queryClient.getQueryData(["getPrincipal"])?.data?.data;
    const { data: userData } = useQuery({
        queryKey: ["getUserList"],
        queryFn: getUserListRequest,
        enabled: !!principalData,
    });
    const { data: boardData } = useQuery({
        queryKey: ["getBoardList"],
        queryFn: getBoardRequest,
        enabled: !!principalData,
    });

    return (
        <div css={s.container}>
            <div css={s.mainContainer}>
                <div css={s.headerContainer}>
                    <div>
                        <h1>관리자 대시보드</h1>
                        <p>시스템 관리 및 모니터링</p>
                    </div>
                    <div>
                        <button onClick={() => navigate("/")}>사용자 페이지</button>
                        <button onClick={() => logout()}>로그아웃</button>
                    </div>
                </div>
                <div css={s.statusContainer}>
                    <div>
                        <div>
                            <p>전체 회원</p>
                            <FiUser />
                        </div>
                        <div>
                            <div>{userData?.data?.data?.length}</div>
                            <p>등록된 회원 수</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>전체 게시물</p>
                            <IoDocumentTextOutline />
                        </div>
                        <div>
                            <div>{boardData?.data?.data?.length}</div>
                            <p>작성된 게시물 수</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>시스템 정상</p>
                            <FaChartBar />
                        </div>
                        <div>
                            <div>정상</div>
                            <p>모든 시스템 정상 작동</p>
                        </div>
                    </div>
                </div>
                <div css={s.buttonContainer}>
                    <button onClick={() => navigate("/admin/manage/user")}>
                        <div>
                            <FiUser />
                        </div>
                        <h3>회원관리</h3>
                        <p>회원 목록 조회, 상세 정보 확인 및 계정 활성화/비활성화 관리</p>
                    </button>
                    <button onClick={() => navigate("/admin/manage/board")}>
                        <div>
                            <IoDocumentTextOutline />
                        </div>
                        <h3>게시물 관리</h3>
                        <p>게시물 목록 조회, 상세 내용 확인 및 부적절한 게시물 삭제</p>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DashBoardPage;
