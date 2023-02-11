import React from 'react';
import styled from '@emotion/styled';
import colors from '@/styles/colors';

interface Props {
	buttonType?: string;
	width?: string;
	height?: string;
	isDisabled?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
	children: React.ReactNode;
}

const Button = ({
	buttonType = 'blue',
	width = '100',
	height = '100',
	isDisabled = false,
	onClick,
	children,
}: Props) => {
	return (
		<StyledButton
			buttonType={buttonType}
			width={width}
			height={height}
			disabled={isDisabled}
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
}>`
	${({ buttonType }) => handleButtonType(buttonType)};
	width: ${({ width }) => width}px;
	height: ${({ height }) => height}px;
	border-radius: 20px;
	font-weight: bold;
	text-align: center;
	cursor: pointer;
	&:disabled {
		opacity: 1;
		cursor: default;
	}
`;

const handleButtonType = (buttonType: string) => {
	switch (buttonType) {
		case 'white':
			return `
        color: ${colors.primary};
        background-color: ${colors.white};
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
		default:
			return `
        color: ${colors.white};
        background-color: ${colors.primary};
        border: none;
        transition:0.3s ease all;
        &:hover {
          opacity: 0.7;
        }
      `;
	}
};
