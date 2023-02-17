import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { css } from '@emotion/react';
import COLORS from '@/styles/colors';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: number;
  isMypage?: boolean;
};

const BackButton = ({ onClick, size, isMypage }: Props) => {
  return (
    <button css={isMypage ? MypageButtonStyle : BackButtonStyle} onClick={onClick}>
      <FiArrowLeft size={size} />
    </button>
  );
};

export default BackButton;

const BackButtonStyle = css`
  position: relative;
  left: 0.5vw;
  top: 2vh;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MypageButtonStyle = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
