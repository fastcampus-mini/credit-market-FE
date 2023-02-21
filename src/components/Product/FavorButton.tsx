import { createFavor } from '@/apis/favor';
import styled from '@emotion/styled';
import React from 'react';
import { useDispatch } from 'react-redux';
import Input from '../common/Input';

interface Props {
  id: string;
  isFavor: boolean;
}

const FavorButton = ({ id, isFavor }: Props) => {
  const dispatch = useDispatch();

  const handleFavor = async () => {
    // await createFavor(id);
    // dispatch(toggleFavor(id));
    alert('Click!❤️');
  };

  return <StyledButton onClick={handleFavor}>{isFavor ? '❤️' : '🤍'}</StyledButton>;
};

export default FavorButton;

const StyledButton = styled.button`
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
`;
