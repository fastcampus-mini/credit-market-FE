import React from 'react';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import COLORS from './colors';

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

const style = css`
  ${reset}

  * {
    box-sizing: border-box;
    &::-webkit-scrollbar {
      width: 5px;
      background-color: inherit;
      border-radius: 10px;
    }

    &::-webkit-scrollbar-thumb {
      width: 5px;
      background-color: ${COLORS.scrollbar};
      border-radius: 10px;
    }
  }

  body {
    font-family: 'Noto Sans KR', sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${COLORS.mainText};
    background: ${COLORS.bodyBackground};

    .ReactModalPortal {
      z-index: 50;
    }

    .ReactModal__Overlay {
      border-radius: 30px;
      width: 390px;
      min-width: 390px;
      height: 90vh;
      max-height: 844px;
      margin: auto;
      font-size: 14px;
    }

    .ReactModal__Content {
      min-width: 260px;
      min-height: 160px;
      border-radius: 14px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    #root {
      display: flex;
      flex-direction: column;
      background-color: ${COLORS.background};
      border-radius: 30px;
      width: 390px;
      min-width: 390px;
      height: 90vh;
      max-height: 844px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow-x: hidden;
      overflow-y: auto;
      color: ${COLORS.mainText};

      iframe {
        border: none;
      }

      .container:hover .attribution {
        display: none;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      input {
        cursor: pointer;
      }

      input[type='checkbox'] {
        display: flex;
        align-self: center;
        accent-color: ${COLORS.checkbox};
        width: 15px;
        height: 15px;
        margin: 0;
      }

      .selectBox {
        display: flex;
        justify-content: space-between;
        padding: 10px 0;

        select {
          width: 73px;
          border-radius: 5px;
          border: none;
          padding: 5px 3px;
          font-size: 11px;
          border: 1px solid ${COLORS.textInput};
        }
      }
    }
  }
`;
