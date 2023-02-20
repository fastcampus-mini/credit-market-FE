import styled from '@emotion/styled';
import React from 'react';

interface Prop {
  src: string;
  width?: string;
  height?: string;
  borderRadius?: string;
  alt: string;
}

const Image = ({ src, width, height, borderRadius, alt }: Prop) => {
  return (
    <StyledImage src={src} width={width} height={height} borderRadius={borderRadius} alt={alt} />
  );
};

export default Image;

const StyledImage = styled.img<Prop>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
