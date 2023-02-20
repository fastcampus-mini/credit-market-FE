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

interface FormValues {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm<FormValues>();
  const onSubmit = async (data: FormValues) => {
    await new Promise((r) => setTimeout(r, 1000));
    alert(JSON.stringify(data));
    // try {
    //   const response = await axios.post('/api/login', data);
    //   console.log(response.data);
    // } catch (error) {
    //   console.error(error);
    // }
    goHome();
  };

  const navigate = useNavigate();
  const location1 = useLocation();
  const goHome = () => {
    navigate(ROUTES.HOME, { state: ROUTES.LOGIN });
  };
  const goSignup = () => {
    navigate(ROUTES.SIGNUP, { state: ROUTES.LOGIN });
  };
  const goBack = () => {
    navigate(location1.state?.from || '/', { replace: true });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputBox = e.target.closest('div') as HTMLDivElement;
    e.target.value ? inputBox.classList.add('active') : inputBox.classList.remove('active');
  };

  return (
    <SignForm>
      <BackButton onClick={goBack} size={25} />
      <SigninStyle>
        <h1 css={mb70}>
          <LogoStyle src="../../images/logo_Main.png" alt="" />
        </h1>
        <SigninFormStyle onSubmit={handleSubmit(onSubmit)}>
          <InputBox onChange={handleChange}>
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

          <InputBox onChange={handleChange}>
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

  &:last-child {
    margin-bottom: 0;
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
