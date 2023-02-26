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
import { FaSmile } from 'react-icons/fa';
import { useCookies } from 'react-cookie';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location1 = useLocation();
  const [cookies, setCookie] = useCookies();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, dirtyFields, errors },
  } = useForm<ILogin>();

  const onSubmit = async (data: any) => {
    // alert(JSON.stringify(data));

    try {
      dispatch(showLoading());
      const response = await login({
        userEmail: data.email,
        userPassword: data.password,
      });
      setCookie('userName', '알뜰이', { maxAge: 3600 });
      setCookie('accessToken', response.token, { maxAge: 3600 });
      dispatch(
        setModal({
          isOpen: true,
          text: MESSAGES.LOGIN.COMPLETE_LOGIN,
          onClickOk: () => {
            dispatch(
              setModal({
                isOpen: false,
              }),
            );
          },
        }),
      );
      goHome();
    } catch (error: any) {
      if (error.response && error.response.status === 404) {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.LOGIN.CHECK_EMAIL,
          }),
        );
      } else if (error.response && error.response.status === 401) {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.LOGIN.CHECK_PASSWORD,
          }),
        );
      } else {
        dispatch(
          setModal({
            isOpen: true,
            onClickOk: () => dispatch(setModal({ isOpen: false })),
            text: MESSAGES.LOGIN.ERROR_LOGIN,
          }),
        );
      }
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
      <BackButton onClick={goBack} size={25} color={COLORS.white} />
      <SigninStyle>
        <h1>
          <LogoStyle src="../../images/logo_white.png" alt="" />
        </h1>
        <SigninFormStyle onSubmit={handleSubmit(onSubmit)}>
          <InputBox className={errors.email ? 'active' : dirtyFields.email ? 'active' : ''}>
            <Input
              id="LoginEmail"
              label="이메일"
              inputType="text"
              classType="text-input-white"
              aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
              autoFocus
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
              label="비밀번호"
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
        {/* <LoginBackground>
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
        </LoginBackground> */}
        <SignupBtnArea>
          <p>Don't have an account?</p>
          <Button
            buttonType="transparent"
            width="auto"
            height="auto"
            onClick={goSignup}
            fontWeight={800}
            color={COLORS.white}
          >
            Sign up <FaSmile />
          </Button>
        </SignupBtnArea>
      </SigninStyle>
    </SignForm>
  );
};

export default Login;

export const SignForm = styled.div`
  // background-color: ${COLORS.textInput};
  background-color: ${COLORS.primary};
  height: calc(100% + 110px);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SigninStyle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  #lottie {
    width: 100px;
  }

  h1 {
    padding: 0 80px;
  }
`;

const SigninFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-top: 70px;
  background: ${COLORS.background};
  margin: 70px 50px;
  padding: 50px 20px 20px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  > button {
    margin-top: 20px;
  }
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

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background: ${COLORS.lightGray};
    bottom: 0;
    transition: 0.5s;
    z-index: 1;
  }

  &.active::after,
  &:focus-within::after {
    width: 100%;
    z-index: 2;
  }

  &.active label,
  &:focus-within label {
    top: -5px;
    left: 0;
    color: ${COLORS.primary};
    font-weight: bold;
    opacity: 1;
    z-index: 0;
  }

  &.active svg,
  &:focus-within svg {
    color: ${COLORS.primary};
    font-weight: bold;
    opacity: 1;
    z-index: 0;
    transition: 0.5s;
  }

  &.active select,
  &:focus-within select {
    color: ${COLORS.mainText};
    font-weight: bold;
  }

  input {
    width: 100%;
    border: none;
    padding: 10px 15px;
    outline: none;
    background: transparent;
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

  svg {
    color: ${COLORS.gray};
    margin-right: 10px;
    transform: scale(1.3);
  }
`;

const SignupBtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 13px;
    color: ${COLORS.lightGray};
  }

  button {
    display: flex;
    gap: 2px;
    justify-content: center;
    align-items: center;
    font-size: 15px;

    &:hover {
      transform: scale(1.2) rotate(-20deg);
    }
  }
`;

export const LogoStyle = styled.img({
  width: '100%',
});

// const LoginBackground = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 30px 0;
// `;

export const ErrStyle = styled.p`
  color: red;
  font-size: 0.7em;
  position: absolute;
  bottom: -15px;
  right: 0;
`;
