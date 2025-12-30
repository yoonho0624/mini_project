import { css } from "@emotion/react";

export const container = css`
    width: 100%;
    height: 100%;
    background: #eef2ff;
    background: linear-gradient(
        90deg,
        rgba(238, 242, 255, 1) 0%,
        rgba(250, 245, 255, 1) 50%,
        rgba(253, 242, 248, 1) 100%
    );
    display: flex;
    justify-content: center;
    align-items: start;
`;

export const mainContainer = css`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 16px;
    box-sizing: border-box;

    & > div:nth-of-type(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 16px;

        & > div {
            width: 64px;
            height: 64px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 36px;
            border-radius: 16px;
            color: white;
            background: #4f39f6;
            background: linear-gradient(
                90deg,
                rgba(79, 57, 246, 0.8) 0%,
                rgba(152, 16, 250, 0.8) 100%
            );
        }

        & > h1 {
            font-size: 36px;
            color: #4f39f6;
            letter-spacing: 3px;
        }

        & > p {
            color: #4a5565;
            font-size: 16px;
            letter-spacing: 2px;
        }
    }
`;

export const bottomContainer = css`
    width: 850px;
    padding: 32px;
    box-sizing: border-box;
    border-radius: 14px;
    background-color: white;
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
`;
export const innerBox = css`
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:nth-of-type(1),
    div:nth-of-type(2) {
        display: flex;
        flex-direction: column;
        gap: 15px;

        & > label {
            font-size: 18px;
            font-weight: 600;
            color: #464153;
        }

        & > input {
            outline: none;
            padding: 12px 8px;
            border-radius: 8px;
            border: 1px solid #dbdbdb;
            font-size: 14px;
            background-color: rgb(243, 243, 245);

            &:focus {
                outline: 2px solid #aaaaaa;
            }
        }

        & > textarea {
            height: 150px;
            outline: none;
            padding: 12px 8px;
            border-radius: 8px;
            border: 1px solid #dbdbdb;
            font-size: 14px;
            background-color: rgb(243, 243, 245);
            resize: none;

            &:focus {
                outline: 2px solid #aaaaaa;
            }
        }
    }

    & > div:nth-of-type(3) {
        display: flex;
        justify-content: space-between;
        align-items: center;

        & > span {
            font-size: 14px;
            color: #6a7282;
        }
    }

    & > div:nth-of-type(4) {
        display: flex;
        justify-content: end;
        align-items: center;
        border-top: 1px solid #dbdbdb;
        padding-top: 24px;
        box-sizing: border-box;
        gap: 15px;

        & > button:nth-of-type(1) {
            padding: 8px 24px;
            font-size: 14px;
            background-color: white;
            border: 1px solid #dbdbdb;
            border-radius: 8px;
            box-sizing: border-box;
            cursor: pointer;

            &:hover {
                background-color: #f2f2f2;
            }
        }

        & > button:nth-of-type(2) {
            padding: 8px 24px;
            font-size: 14px;
            border-radius: 8px;
            box-sizing: border-box;
            border: none;
            background: #4f39f6;
            background: linear-gradient(
                90deg,
                rgba(79, 57, 246, 0.8) 0%,
                rgba(152, 16, 250, 0.8) 100%
            );
            color: white;
            cursor: pointer;
            
            &:hover {
                background: linear-gradient(
                    90deg,
                    rgba(79, 57, 246, 1) 0%,
                    rgba(152, 16, 250, 1) 100%
                );
            }
        }
    }
`;
