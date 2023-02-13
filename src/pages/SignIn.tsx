import React, { useRef } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router';
import colors from '@/styles/colors';

const HomeStyle = styled.div`
  padding: 20px 10px;
  position: relative;
  z-index: 1;

  #lottie {
    width: 100px;
  }
`;

const SignIn = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 엔터키 입력시 서브밋 되는 거 막아야함
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    console.log({ name, email });
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
      <form onSubmit={handleSubmit}>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit" onClick={goHome}>
          LOGIN
        </button>
      </form>

      <button onClick={goSignup}>JOIN</button>
    </HomeStyle>
  );
};

export default SignIn;
