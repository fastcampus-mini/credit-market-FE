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
  checked?: boolean;
  classType?: string;
  ariaInvalid?: boolean;
  register?: {};
  autoFocus?: boolean;
}

const Input = ({
  inputType = 'text',
  value,
  width = '',
  height = '',
  placeholder,
  onClick,
  onChange,
  checked,
  classType = 'text-input',
  ariaInvalid = true,
  register = {},
  autoFocus = false,
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
        checked={checked}
        {...register}
        autoFocus={autoFocus}
      />
      {classType === 'text-search' && <BsSearch className="searchIcon" />}
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
        display: flex;
        align-items: center;

        input {
          width: 100%;
          border: none;
          padding: 10px 15px;
          outline: none;
          background: ${COLORS.textInput};
        }
      `;
    case 'text-input-white':
      return `
          overflow: hidden;
          display: flex;
          align-items: center;
  
          input {
            width: 100%;
            border: none;
            padding: 10px 15px;
            outline: none;
            background: ${COLORS.white};
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

        .searchIcon {
          width: 50px;
          color: ${COLORS.primary};
        }
      `;

    case 'checkbox':
      return ``;
  }
};
