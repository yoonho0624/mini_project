import { useEffect } from "react";
import { usePrincipalState } from "../store/usePrincipalState";
import { useLocation } from "react-router-dom";

function ProtectedRouter({ children }) {
    const location = useLocation();

    console.log(location.pathname);
    const { isLoggedIn, principal, loading, login, logout } =
        usePrincipalState();

    useEffect(() => {
        if (!loading) {
            if (!isLoggedIn) {
                alert("로그인이 필요합니다.");
                window.location.href = "/auth/signin";
            } else {
                if (
                    location.pathname.includes("board") &&
                    principal.authorities[0].authority === "ROLE_TEMPORARY_USER"
                ) {
                    alert("이메일 인증이 필요한 서비스입니다.");
                    window.location.href = `/profile/${principal.username}`;
                    return;
                }
            }
        }
    }, [loading, location.pathname]);

    return children;
}

export default ProtectedRouter;