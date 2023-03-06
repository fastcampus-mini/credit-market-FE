import { IPassword } from '@/interfaces/user';
import { ErrStyle, InputBox } from '@/pages/Login';
import { SignupFormStyle } from '@/pages/Signup';
import { RootState } from '@/store/store';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import Button from '../common/Button';
import Input from '../common/Input';

const ModalBox = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [password, setPassword] = useState('');
  const handleClick = () => {
    modalState.onClickOk();
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 1000);
  };

  const handleOnclick = () => {
    modalState.onClickOk();
    setPassword('');
  };

  const modalState = useSelector((state: RootState) => state.modal);

  const customStyles = {
    content: {
      width: modalState.isPassword ? '80%' : '15%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '4px',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      zIndex: '500',
      height: modalState.isPassword ? '230px' : '180px',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, dirtyFields, errors },
  } = useForm<IPassword>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputBox = e.target.closest('div') as HTMLDivElement;
    e.target.value ? inputBox.classList.add('active') : inputBox.classList.remove('active');
    setPassword(e.target.value);
  };

  return (
    <Modal isOpen={modalState.isOpen} style={customStyles}>
      <ModalText>
        <p>{modalState.text}</p>
      </ModalText>
      <SignupFormStyle>
        {modalState.isPassword && (
          <div>
            <InputBox
              onChange={handleChange}
              className={errors.password ? 'active' : dirtyFields.password ? 'active' : ''}
            >
              <Input
                id="PasswordCheckPw"
                value={password}
                label="Password"
                inputType="password"
                classType="text-input"
                aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
                register={{
                  ...register('password', {
                    required: '비밀번호를 입력해주세요.',
                    minLength: { value: 8, message: '비밀번호를 8자리 이상 입력해주세요.' },
                  }),
                }}
              />
              {errors.password && <ErrStyle role="alert">{errors.password.message}</ErrStyle>}
            </InputBox>
          </div>
        )}
        <ButtonWrap>
          <Button
            buttonType="blue"
            width="80px"
            height="34px"
            onClick={modalState.isPassword ? handleSubmit(modalState.onClickOk) : handleClick}
            isDisabled={(modalState.isPassword && isSubmitting) || isButtonDisabled}
          >
            {modalState.okText ? modalState.okText : '확인'}
          </Button>
          {modalState.onClickCancel && (
            <Button
              buttonType="white"
              width={modalState.cancelText ? '110px' : '80px'}
              height="34px"
              onClick={modalState.onClickCancel}
            >
              {modalState.cancelText ? modalState.cancelText : '취소'}
            </Button>
          )}
        </ButtonWrap>
      </SignupFormStyle>
    </Modal>
  );
};

export default ModalBox;

const ModalText = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 38px;
`;
