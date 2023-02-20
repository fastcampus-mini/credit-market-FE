import styled from '@emotion/styled';
import React from 'react';

interface Prop {
  src: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const Image = ({ src, width, height, borderRadius }: Prop) => {
  return <StyledImage src={src} width={width} height={height} borderRadius={borderRadius} />;
};

export default Image;

const StyledImage = styled.img<Prop>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: ${({ borderRadius }) => borderRadius};
`;
