import React, { useEffect } from "react";
import { usePrincipalState } from "../store/usePrincipalState";

function ProtectedRouter({ children }) {
    const { isLoggedIn, pricipal, loading, login, logout } = usePrincipalState()
    
    useEffect(() => {
        if (!loading) {
            if (!isLoggedIn) {
                alert("로그인이 필요합니다.")
                window.location.href = "/auth/signin"
            }
        }
    }, [loading])
    
    return children;
}

export default ProtectedRouter;
