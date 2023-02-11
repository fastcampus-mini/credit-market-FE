import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = () => {
	return <Global styles={style} />;
};

export default GlobalStyle;

const style = css`
	${reset}

	body {
		font-family: sans-serif;
	}
`;
