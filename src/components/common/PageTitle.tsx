import styled from '@emotion/styled';
import React from 'react';

interface Props {
  title: string;
}

const PageTitle = ({ title }: Props) => {
  return <TitleText>{title}</TitleText>;
};

export default PageTitle;

const TitleText = styled.h1`
  font-size: 18px;
  font-weight: 600;
  padding: 1.2rem 0;
`;
