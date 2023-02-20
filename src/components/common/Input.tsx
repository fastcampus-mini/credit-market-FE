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
  id?: string;
  top?: string;
  right?: string;
  label?: string;
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
  id,
  top = '',
  right = '',
  label = '',
}: Prop) => {
  return (
    <StyledInputBox
      width={width}
      height={height}
      inputType={inputType}
      classType={classType}
      top={top}
      right={right}
    >
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
        id={id}
      />
      {classType === 'text-search' && <BsSearch className="searchIcon" />}
      {classType === 'heartBtn' && <label htmlFor={id} title="찜하기"></label>}
      {classType === 'text-input-white' && <label htmlFor={id}>{label}</label>}
    </StyledInputBox>
  );
};

export default Input;

const StyledInputBox = styled.div<{
  width: string;
  height: string;
  top: string;
  right: string;
  inputType: string;
  classType: string;
}>`
  ${({ classType }) => handleInputType(classType)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  top: ${({ top }) => top};
  right: ${({ right }) => right};
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
          display: flex;
          align-items: center;
          position:relative;
          
          &::after {
            position:absolute;
            content:'';
            width:0;
            left:50%;
            transform:translateX(-50%);
            height:2px;
            background:${COLORS.primary};
            bottom:0;
            transition:0.5s;
          }

          &:focus-within::after{
            width : 100%;
          }

          &:focus-within label {
            top:-13px;
            left:0;
            color:${COLORS.primary};
            font-weight:bold;
            font-size:14px;
          }

          input {
            width: 100%;
            border: none;
            padding: 10px 15px;
            outline: none;
            background: ${COLORS.white};

          }

          label {
            position:absolute;
            font-size:13px;
            left:15px;
            top:50%;
            transform:translateY(-50%);
            color:${COLORS.gray};
            cursor:pointer;
            transition:0.5s;
          }

        `;
    case 'text-search':
      return `
        border-radius: 50px;
        overflow: hidden;
        background: ${COLORS.textInput};
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

    case 'heartBtn':
      return `
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
    
        /*      CHECKBOX         */
    
        input[type='checkbox'] {
          display: none !important;
        }
    
        input[type='checkbox'] + label {
          position: relative;
          padding-left: 35px;
          display: inline-block;
          font-size: 16px;
          cursor: pointer;
        }
    
        input[type='checkbox'] + label:before {
          content: '🤍';
          border: 1px solid transparent;
          border-radius: 3px;
          display: block;
          position: absolute;
          transition: 0.5s ease;
        }
    
        input[type='checkbox']:checked + label:before {
          border: 1px solid transparent;
          background-color: transparent;
        }
    
        input[type='checkbox']:checked + label:after {
          content: '❤️';
          font-size: 18px;
          position: absolute;
          transition: 0.5s ease;
        }
      `;
  }
};
