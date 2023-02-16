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
    background: #e8e8e8;

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
      overflow: hidden;
      color: ${COLORS.mainText};

      iframe {
        border: none;
      }

      .container:hover .attribution {
        display: none;
      }

      a {
        color: inherit;
      }

      input[type='checkbox'] {
        display: flex;
        align-self: center;
        accent-color: ${COLORS.checkbox};
        width: 15px;
        height: 15px;
        margin: 0;
        cursor: pointer;
      }
    }
  }
`;
