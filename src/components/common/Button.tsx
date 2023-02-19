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
  type?: 'button' | 'submit' | 'reset' | undefined;
  fontWeight?: number;
}

const Button = ({
  buttonType = 'blue',
  width = '100%',
  height = '50px',
  isDisabled = false,
  onClick,
  color = '',
  children,
  type = 'button',
  fontWeight = 400,
}: Props) => {
  return (
    <StyledButton
      buttonType={buttonType}
      width={width}
      height={height}
      disabled={isDisabled}
      color={color}
      onClick={onClick}
      type={type}
      fontWeight={fontWeight}
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
  fontWeight: number;
}>`
  ${({ buttonType }) => handleButtonType(buttonType)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
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
        transition:0.3s ease all;
        border: 1px solid ${COLORS.primary};
        &:hover {
          opacity: 0.7;
        }
      `;
    case 'blue':
      return `
        color: ${COLORS.white};
        background-color: ${COLORS.primary};
        transition:0.3s ease all;
        border: none;
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
        color: ${COLORS.white};
        background-color: transparent;
        border: none;
      `;
    case 'text':
      return `
        color: ${COLORS.secondary};
        background-color: transparent;
        border: none;
      `;
    case 'secondary':
      return `
        color: ${COLORS.white};
        background-color: ${COLORS.secondary};
        border: none;
      `;
    default:
      return `
        color: ${COLORS.white};
        background-color: ${COLORS.primary};
        transition:0.3s ease all;
        border: none;
        &:hover {
          opacity: 0.7;
        }
      `;
  }
};
