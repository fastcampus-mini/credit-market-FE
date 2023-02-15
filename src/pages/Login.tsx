import React from 'react';
import { hideSignPage } from '@/store/signPageSlice';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(hideSignPage());
    };
  }, []);

  return <StyledLogin>Login</StyledLogin>;
};

export default Login;

const StyledLogin = styled.div``;
