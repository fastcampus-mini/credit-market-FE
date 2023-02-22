import styled from '@emotion/styled';
import React from 'react';
import Modal from 'react-modal';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import { ROUTES } from '@/constants/routes';
import { ErrStyle, InputBox } from '@/pages/Login';
import { SignupFormStyle } from '@/pages/Signup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { PasswordModalStore } from '@/interfaces/store';
import { setPasswordModal } from '@/store/passModalSlice';

interface PassWordForm {
  password: string;
}

const PasswordModalBox = () => {
  const passwordModalState = useSelector((state: PasswordModalStore) => state.passwordModal);

  const customStyles = {
    content: {
      width: '15%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '20px',
      borderRadius: '4px',
      backgroundColor: 'white',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
      zIndex: '500',
      height: '220px',
    },
  };

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, dirtyFields, errors },
  } = useForm<PassWordForm>();

  const dispatch = useDispatch();

  const onSubmit = async (data: PassWordForm) => {
    // await new Promise((r) => setTimeout(r, 1000));
    // alert(JSON.stringify(data));
    // try {
    //   const response = await axios.post('/api/login', data);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }

    dispatch(setPasswordModal({ isOpen: false }));

    // const navigate = useNavigate();

    // const goTo = () => {
    //   navigate(passwordModalState.linkURL);
    // };
    // goTo();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputBox = e.target.closest('div') as HTMLDivElement;
    e.target.value ? inputBox.classList.add('active') : inputBox.classList.remove('active');
  };

  return (
    <Modal isOpen={passwordModalState.isOpen} style={customStyles}>
      <ModalText>
        <p>회원님 본인이 맞으신가요?.</p>
        <p>비밀번호를 입력해주세요.</p>
      </ModalText>
      <SignupFormStyle>
        <InputBox
          onChange={handleChange}
          className={errors.password ? 'active' : dirtyFields.password ? 'active' : ''}
        >
          <Input
            id="PasswordCheckPw"
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
        <ButtonWrap>
          <Button
            buttonType="blue"
            width="80px"
            height="34px"
            onClick={handleSubmit(onSubmit)}
            isDisabled={isSubmitting}
          >
            입력 완료
          </Button>
        </ButtonWrap>
      </SignupFormStyle>
    </Modal>
  );
};

export default PasswordModalBox;

const ModalText = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.6;
`;

const ButtonWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  height: 38px;
`;
