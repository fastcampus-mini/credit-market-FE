import React from 'react';
import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

interface Prop {
  inputType: string;
  value?: string;
  width?: string;
  height?: string;
  placeholder?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  classType?: string;
  ariaInvalid?: boolean;
  register?: {};
}

const Input = ({
  inputType = 'text',
  value,
  width = '',
  height = '',
  placeholder,
  onClick,
  onChange,
  classType = 'text-input',
  ariaInvalid = true,
  register = {},
}: Prop) => {
  return (
    <StyledInputBox width={width} height={height} inputType={inputType} classType={classType}>
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        aria-invalid={ariaInvalid}
        onClick={onClick}
        onChange={onChange}
        {...register}
      />
      {classType === 'text-search' && <BsSearch className="icon" />}
    </StyledInputBox>
  );
};

export default Input;

const StyledInputBox = styled.div<{
  width: string;
  height: string;
  inputType: string;
  classType: string;
}>`
  ${({ classType }) => handleInputType(classType)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const handleInputType = (classType: string) => {
  switch (classType) {
    case 'text-input':
      return `
        overflow: hidden;
        background-color: ${COLORS.textInput};
        display: flex;
        align-items: center;

        input {
          width: 100%;
          border: none;
          padding: 10px 15px;
          outline: none;
          background: inherit;
        }
      `;
    case 'text-search':
      return `
        border-radius: 50px;
        overflow: hidden;
        background-color: ${COLORS.textInput};
        display: flex;
        align-items: center;

        input {
          width: 100%;
          border: none;
          padding: 10px 15px;
          outline: none;
          background: inherit;
        }

        .icon {
          width: 50px;
          color: ${COLORS.primary};
        }
      `;

    case 'checkbox':
      return ``;
  }
};
