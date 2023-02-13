import styled from '@emotion/styled';
import React from 'react';

interface Prop {
  src: string;
  width?: string;
  height?: string;
}

const Image = ({ src, width, height }: Prop) => {
  return <StyledImage src={src} width={width} height={height} />;
};

export default Image;

const StyledImage = styled.img<Prop>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
`;
