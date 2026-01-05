import { css } from "@emotion/react";

export const container = css`
    width: 100vw;
    height: 100vh;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
    padding: 80px 0;
    box-sizing: border-box;
    overflow: auto;
`;

export const mainContainer = css`
    width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const profileContainer = (status) => css`
    width: 100%;
    border: 1px solid #dbdbdb;
    border-radius: 14px;
    box-sizing: border-box;
    padding: 24px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > h4 {
            font-size: 34px;
        }

        & > span {
            border: 1px solid ${status === "ACTIVE" ? "#b9f8cf" : "#ffc9c9"};
            border-radius: 14px;
            padding: 8px 16px;
            box-sizing: border-box;
            background-color: ${status === "ACTIVE" ? "#f0fdf4" : "#fef2f2"};
            color: ${status === "ACTIVE" ? "#008236" : "#c10007"};
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        justify-content: start;
        align-items: start;
        gap: 20px;

        & > div:nth-of-type(1) {
            width: 92px;
            height: 92px;
            border: 1px solid #dbdbdb;
            border-radius: 50px;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        & > div:nth-of-type(2) {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        & > div:nth-of-type(2) > div {
            display: flex;
            justify-content: start;
            align-items: center;
            gap: 15px;

            & > div > p {
                margin: 0;
            }
        }
    }
`

export const manageContainer = css`
    width: 100%;
    border-top: 1px solid #dbdbdb;
    padding-top: 20px;  
    display: flex;
    flex-direction: column;
    gap: 15px;

    & > div > button {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px 12px;
        font-size: 14px;
        background-color: #e7000b;
        border-radius: 14px;
        border: none;
        color: white;
        cursor: pointer;
    }
`