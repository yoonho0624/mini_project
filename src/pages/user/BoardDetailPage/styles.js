import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 100%;
    background: #eef2ff;
    background: linear-gradient(90deg, rgba(238, 242, 255, 1) 0%, rgba(250, 245, 255, 1) 50%, rgba(253, 242, 248, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const mainContainer = css`
    width: 1000px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 16px;
    box-sizing: border-box;

    & > div:nth-of-type(1) > button {
        border: none;
        background-color: transparent;
        padding: 8px 12px;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        border-radius: 8px;
        transition: all 0.15s ease;

        &:hover {
            background-color: #fefefe;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        gap: 24px;
        box-sizing: border-box;
        border-radius: 14px;
        background-color: white;
        box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.1);
    }
`;

export const topBox = css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 24px;
    box-sizing: border-box;
    border-bottom: 1px solid #dbdbdb;

    & > h4 {
        font-size: 30px;
        font-weight: 400;
        color: #0a0a0a;
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

        & > div {
            width: 32px;
            height: 32px;
            border-radius: 50px;
            background-color: aquamarine;
            display: flex;
            justify-content: center;
            align-items: center;

            & > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 50px;
            }
        }

        & > p {
            font-size: 14px;
            color: #0a0a0a;
        }
    }

    & > div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
    }
`;

export const bottomBox = css`
    padding: 24px;
    box-sizing: border-box;

    & > p {
        color: #364153;
    }
`;
