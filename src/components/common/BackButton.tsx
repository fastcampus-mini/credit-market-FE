import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { css } from '@emotion/react';

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: number;
  isMypage?: boolean;
  color?: string;
};

const BackButton = ({ onClick, size, isMypage, color }: Props) => {
  return (
    <button css={isMypage ? MypageButtonStyle : BackButtonStyle} onClick={onClick}>
      <FiArrowLeft size={size} color={color} />
    </button>
  );
};

export default BackButton;

const BackButtonStyle = css`
  position: absolute;
  left: 0.5vw;
  top: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const MypageButtonStyle = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: relative;
  top: 3px;
  // left: 2px;
  padding-left: 0;
`;
