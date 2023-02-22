/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import styled from '@emotion/styled';
import COLORS from '@/styles/colors';
import { useForm } from 'react-hook-form';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { css } from '@emotion/react';
import BackButton from '@/components/common/BackButton';
import { ROUTES } from '@/constants/routes';
import { useDispatch } from 'react-redux';
import { hideLoading, showLoading } from '@/store/loadingSlice';
import { login } from '@/apis/auth';
import { setModal } from '@/store/modalSlice';
import { MESSAGES } from '@/constants/messages';
import { setCookie } from '@/utils/cookie';
import { ILogin } from '@/interfaces/user';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location1 = useLocation();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, dirtyFields, errors },
  } = useForm<ILogin>();

  const onSubmit = async (data: any) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));

    try {
      dispatch(showLoading());
      const response = await login({
        userEmail: data.email,
        userPassword: data.password,
      });
      setCookie('userName', '방문자');
      setCookie('accessToken', response);
      goHome();
    } catch (error) {
      dispatch(
        setModal({
          isOpen: true,
          onClickOk: () => dispatch(setModal({ isOpen: false })),
          text: MESSAGES.LOGIN.ERROR_LOGIN,
        }),
      );
    } finally {
      dispatch(hideLoading());
    }
  };

  const goHome = () => {
    navigate(ROUTES.HOME, { state: ROUTES.LOGIN });
  };
  const goSignup = () => {
    navigate(ROUTES.SIGNUP, { state: ROUTES.LOGIN });
  };
  const goBack = () => {
    navigate(location1.state?.from || '/', { replace: true });
  };

  return (
    <SignForm>
      <BackButton onClick={goBack} size={25} />
      <SigninStyle>
        <h1 css={mb70}>
          <LogoStyle src="../../images/logo_Main.png" alt="" />
        </h1>
        <SigninFormStyle onSubmit={handleSubmit(onSubmit)}>
          <InputBox className={errors.email ? 'active' : dirtyFields.email ? 'active' : ''}>
            <Input
              id="LoginEmail"
              label="Email"
              inputType="text"
              classType="text-input-white"
              aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
              register={{
                ...register('email', {
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: '이메일 형식을 올바르게 작성해주세요.',
                  },
                }),
              }}
            />
            {errors.email && <ErrStyle role="alert">{errors.email.message}</ErrStyle>}
          </InputBox>

          <InputBox className={errors.password ? 'active' : dirtyFields.password ? 'active' : ''}>
            <Input
              id="LoginPw"
              label="Password"
              inputType="password"
              classType="text-input-white"
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

          <Button type="submit" isDisabled={isSubmitting} height="40px" fontWeight={800}>
            LOGIN
          </Button>
        </SigninFormStyle>
        <LoginBackground>
          <svg
            width="231"
            height="18"
            viewBox="0 0 231 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="116" cy="9" r="9" fill="#B7C6E0" />
            <rect y="8" width="231" height="1" fill="#B7C6E0" />
          </svg>
        </LoginBackground>
        <Button onClick={goSignup} height="40px" buttonType="secondary" fontWeight={800}>
          JOIN
        </Button>
      </SigninStyle>
    </SignForm>
  );
};

export default Login;

export const SignForm = styled.div`
  background-color: ${COLORS.textInput};
  height: calc(100% + 115px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SigninStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 70px;

  #lottie {
    width: 100px;
  }
`;

const mb70 = css`
  margin-bottom: 70px;
`;

const SigninFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
`;

export const InputBox = styled.div`
  position: relative;
  margin-bottom: 30px;

  &::after {
    position: absolute;
    content: '';
    width: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    background: ${COLORS.primary};
    bottom: 0;
    transition: 0.5s;
  }

  &.active::after,
  &:focus-within::after {
    width: 100%;
  }

  &.active label,
  &:focus-within label {
    top: -13px;
    left: 0;
    color: ${COLORS.primary};
    font-weight: bold;
    font-size: 14px;
    opacity: 1;
    z-index: 0;
  }

  input {
    width: 100%;
    border: none;
    padding: 10px 15px;
    outline: none;
    background: ${COLORS.white};
  }

  label {
    position: absolute;
    font-size: 13px;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: ${COLORS.gray};
    cursor: pointer;
    transition: 0.5s;
  }
`;

export const LogoStyle = styled.img({
  width: '100%',
});

const LoginBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
`;

export const ErrStyle = styled.p`
  color: red;
  font-size: 0.7em;
  position: absolute;
  bottom: -15px;
  right: 0;
`;
