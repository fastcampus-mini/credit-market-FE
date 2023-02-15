import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import styled from '@emotion/styled';
import Colors from '@/styles/colors';
import { useForm } from 'react-hook-form';

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
    goHome();
  };

  const navigate = useNavigate();
  const goHome = () => {
    navigate('/', { state: '/login' });
  };
  const goSignup = () => {
    navigate('/signup', { state: '/login' });
  };

  return (
    <HomeStyle>
      <div className="title">Credit Market</div>
      <p>email</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('email', {
            required: '이메일을 입력해주세요.',
            pattern: { value: /\S+@\S+\.\S+/, message: '이메일 형식을 올바르게 작성해주세요.' },
          })}
          id="email"
          type="text"
          placeholder="Email"
          aria-invalid={!isDirty ? undefined : errors.email ? 'true' : 'false'}
        />
        {errors.email && <small role="alert">{errors.email.message}</small>}
        <input
          {...register('password', {
            required: '비밀번호를 입력해주세요.',
            minLength: { value: 8, message: '비밀번호를 8자리 이상 입력해주세요.' },
          })}
          id="password"
          type="password"
          placeholder="Password"
          aria-invalid={!isDirty ? undefined : errors.password ? 'true' : 'false'}
        />
        {errors.password && <small role="alert">{errors.password.message}</small>}
        <button type="submit" disabled={isSubmitting}>
          LOGIN
        </button>
      </form>

      <button onClick={goSignup}>JOIN</button>
    </HomeStyle>
  );
};

export default Login;

const HomeStyle = styled.div`
  padding: 20px 10px;
  position: relative;
  z-index: 1;

  #lottie {
    width: 100px;
  }
`;
