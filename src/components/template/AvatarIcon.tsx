import styled from '@emotion/styled';
import React from 'react';
import Avatar, { genConfig } from 'react-nice-avatar';

interface Prop {
  userName?: string;
  width?: string;
  height?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  transform?: string;
}

const AvatarIcon = ({
  width = '50px',
  height = '50px',
  top = '',
  right = '',
  left = '',
  bottom = '',
  transform = '',
  userName = '',
}: Prop) => {
  const config = genConfig(userName);

  return (
    <StyledAvater width={width} height={height}>
      <Avatar
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: top,
          right: right,
          left: left,
          bottom: bottom,
          transform: transform,
        }}
        {...config}
      />
    </StyledAvater>
  );
};

export default AvatarIcon;

const StyledAvater = styled.div<{
  width: string;
  height: string;
}>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
`;
