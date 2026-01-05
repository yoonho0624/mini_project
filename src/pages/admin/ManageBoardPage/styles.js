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

    & > div:nth-of-type(2) > p {
        margin: 0;
    }
`;

export const searchContainer = css`
    width: 100%;
    border: 1px solid #dbdbdb;
    padding: 4px 12px;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    justify-content: start;
    align-items: center;
    color: #0a0a0a;
    gap: 12px;

    & > input {
        width: 100%;
        background-color: transparent;
        height: 24px;
        font-size: 14px;
        outline: none;
        border: none;
    }
`;

export const listContainer = css`
    width: 100%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 14px;
    border: 1px solid #dbdbdb;
    box-sizing: border-box;
    background-color: white;
    gap: 15px;

    & > ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;

export const boardContainer = css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 14px;
    border: 1px solid #dbdbdb;
    cursor: pointer;

    & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        gap: 10px;

        & > h4 {
            font-size: 20px;
            font-weight: 400;
            color: #0a0a0a;
        }

        & > p {
            font-size: 16px;
            font-weight: 300;
            color: #717182;
        }
    }
`;

export const boardBottomBox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > div {
        display: flex;
        align-items: center;
        gap: 10px;

        & > p {
            font-size: 14px;
            color: #0a0a0a;
        }
    }
`;
export const profileImgBox = css`
    width: 32px;
    height: 32px;
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
`;
