import React, { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router';
import styled from '@emotion/styled';
import COLORS from '@/styles/colors';
import { useForm } from 'react-hook-form';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import { FiArrowLeft } from 'react-icons/fi';
import { css } from '@emotion/react';
import BackButton from '@/components/common/BackButton';

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
    navigate('/', { state: '/login' });
  };
  const goSignup = () => {
    navigate('/signup', { state: '/login' });
  };
  const goBack = () => {
    navigate(location1.state?.from || '/', { replace: true });
  };

  return (
    <SignForm>
      <BackButton onClick={goBack} size={25} />
      <FormContainer>
        <SigninStyle>
          <div className="title">
            <h1 css={H1Style}>
              <img css={LogoStyle} src="../../images/logo_Main.png" alt="" />
            </h1>
          </div>
          <SigninFormStyle onSubmit={handleSubmit(onSubmit)}>
            <Input
              inputType="text"
              classType="text-input-white"
              placeholder="이메일"
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
            {errors.email && <small role="alert">{errors.email.message}</small>}
            <Input
              inputType="password"
              classType="text-input-white"
              placeholder="Password"
              aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
              register={{
                ...register('password', {
                  required: '비밀번호를 입력해주세요.',
                  minLength: { value: 8, message: '비밀번호를 8자리 이상 입력해주세요.' },
                }),
              }}
            />
            {errors.password && <small role="alert">{errors.password.message}</small>}
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
      </FormContainer>
    </SignForm>
  );
};

export default Login;

export const SignForm = styled.div`
  padding: 9vw 5px;
  background-color: ${COLORS.textInput};
`;

const SigninStyle = styled.div`
  padding: 20px 10px;
  position: relative;
  display: flex;
  flex-direction: column;

  #lottie {
    width: 100px;
  }
`;

const SigninFormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  gap: 15px;
`;

const FormContainer = styled.div`
  display: flex;
  overflow: scroll;
  height: 87vh;
  padding: 15px 40px 15px;
`;

const H1Style = css({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '5vh',
});

const LogoStyle = css({
  width: '80%',
});

const LoginBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
`;
