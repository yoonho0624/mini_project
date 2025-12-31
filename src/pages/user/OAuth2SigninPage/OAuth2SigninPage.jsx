import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function OAuth2SigninPage() {
    const [searchParams] = useSearchParams();

    useEffect(() => {
        localStorage.setItem("AccessToken", searchParams.get("accessToken"));
        window.location.href = "/";
    }, [searchParams]);

    return <div></div>;
}

export default OAuth2SigninPage;
