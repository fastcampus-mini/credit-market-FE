import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import { BsSearch } from 'react-icons/bs';

interface Prop {
  inputType: string;
  value?: string;
  width?: string;
  height?: string;
  placeholder?: string;
}

const Input = ({ inputType = 'text', value, width = '', height = '', placeholder }: Prop) => {
  return (
    <StyledInputBox width={width} height={height} inputType={inputType}>
      <input type={inputType} value={value} placeholder={placeholder} />
      {inputType === 'text' && <BsSearch className="icon" />}
    </StyledInputBox>
  );
};

export default Input;

const StyledInputBox = styled.div<{ width: string; height: string; inputType: string }>`
  ${({ inputType }) => handleInputType(inputType)};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const handleInputType = (inputType: string) => {
  switch (inputType) {
    case 'text':
      return `
        border-radius: 50px;
        overflow: hidden;
        background-color: ${COLORS.textInput};
        display: flex;
        align-items: center;

        input[type='text'] {
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
