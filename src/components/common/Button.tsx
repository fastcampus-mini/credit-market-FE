import React from 'react';
import styled from '@emotion/styled';
import COLORS from '@/styles/colors';

interface Props {
  buttonType?: string;
  width?: string;
  height?: string;
  isDisabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  color?: string;
  children: React.ReactNode;
}

const Button = ({
  buttonType = 'blue',
  width = '360',
  height = '50',
  isDisabled = false,
  onClick,
  color = COLORS.white,
  children,
}: Props) => {
  return (
    <StyledButton
      buttonType={buttonType}
      width={width}
      height={height}
      disabled={isDisabled}
      color={color}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;

export const StyledButton = styled.button<{
  buttonType: string;
  width: string;
  height: string;
  color: string;
}>`
  ${({ buttonType }) => handleButtonType(buttonType)};
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ color }) => color};
  border-radius: 30px;
  text-align: center;
  cursor: pointer;
  outline: none;
  &:disabled {
    opacity: 1;
    cursor: default;
  }
`;

const handleButtonType = (buttonType: string) => {
  switch (buttonType) {
    case 'white':
      return `
        color: ${COLORS.primary};
        background-color: ${COLORS.white};
        border: none;
        transition:0.3s ease all;
        &:hover {
          opacity: 0.7;
        }
      `;
    case 'disabled':
      return `
        color: #808080;
        background-color: #D8D9D9;
        border: none;
      `;
    case 'transparent':
      return `
        color: #000;
        background-color: transparent;
        border: none;
      `;
    default:
      return `
        color: ${COLORS.white};
        background-color: ${COLORS.primary};
        border: none;
        transition:0.3s ease all;
        &:hover {
          opacity: 0.7;
        }
      `;
  }
};
