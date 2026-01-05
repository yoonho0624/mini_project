import { css } from "@emotion/react";
export const container = css`
    width: 100%;
    background: #eef2ff;
    background: linear-gradient(90deg, rgba(238, 242, 255, 1) 0%, rgba(250, 245, 255, 1) 50%, rgba(253, 242, 248, 1) 100%);
    display: flex;
    justify-content: center;
    align-items: start;
    padding-bottom: 50px;
`;

export const mainContainer = css`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    padding: 16px;
    box-sizing: border-box;
`;

export const profileBox = css`
    width: 100%;
    background-color: white;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 14px;
`;

export const profileTopBox = css`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    box-sizing: border-box;

    & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;
    }
`;

export const profileImg = css`
    width: 90px;
    height: 90px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        cursor: pointer;
    }

    & > input {
        display: none;
    }
`;

export const profileBottomBox = css`
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const profileSettingBox = css`
    width: 100%;
    background-color: white;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 14px;
`;

export const settingButtonBox = css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;

    & > button {
        border: 1px solid #dbdbdb;
        background-color: transparent;
        padding: 16px 12px;
        font-size: 16px;
        border-radius: 8px;
        text-align: start;
        cursor: pointer;
    }
`;

export const profileBoardBox = css`
    width: 100%;
    background-color: white;
    padding: 24px;
    box-sizing: border-box;
    border-radius: 14px;
`;

export const boardBox = css`
    width: 100%;
    height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
    padding: 20px;
    box-sizing: border-box;

    & > ul {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;

        & > li {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 24px;
            box-sizing: border-box;
            border-radius: 14px;
            box-shadow: 0px 10px 15px 3px rgba(0, 0, 0, 0.1);
            transition: all 0.2s ease;
            cursor: pointer;

            &:hover {
                box-shadow: 0px 20px 15px 3px rgba(0, 0, 0, 0.1);
            }

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

export const blurBox = css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);

    & > h4 {
        font-size: 60px;
        color: #0a0a0a;
    }
`;

export const spinnerBox = css`
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.3);
`
