import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { css } from '@emotion/react';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: number;
};

const BackButton = ({ onClick, size }: Props) => {
  return (
    <button css={BackButtonStyle} onClick={onClick}>
      <FiArrowLeft size={size} />
    </button>
  );
};

export default BackButton;

const BackButtonStyle = css`
  position: absolute;
  left: 0.5vw;
  top: 2vh;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;
