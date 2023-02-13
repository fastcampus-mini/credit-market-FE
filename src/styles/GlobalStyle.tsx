import { ROUTES } from '@/constants/routes';
import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';
import { Route, useLocation, useNavigate } from 'react-router-dom';

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;

const style = css`
  ${reset}

  :root {
    --main-text-color: #333;
    --signature-color: #19418a;
    --login-background: #4831d4;
    --background-color: #f9fbff;
    --white-color: #fff;
  }

  body {
    font-family: sans-serif;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--text-color);

    #root {
      background-color: var(--login-background);
      border-radius: 30px;
      width: 390px;
      height: 90vh;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
      position: relative;
      overflow: hidden;
      color: var(--main-text-color);

      iframe {
        border: none;
      }

      a {
        color: inherit;
      }
    }
  }
`;
