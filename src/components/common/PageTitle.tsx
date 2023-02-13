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
  font-size: 22px;
  font-weight: 600;
  padding-bottom: 6px;
`;
