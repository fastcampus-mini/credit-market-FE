import styled from '@emotion/styled';
import React from 'react';
import Avatar from 'react-nice-avatar';
import { genConfig } from 'react-nice-avatar';

interface Prop {
  width?: string;
  height?: string;
  accessToken?: string;
}

const AvatarIcon = ({ width = '50px', height = '50px', accessToken = '' }: Prop) => {
  const config = genConfig(accessToken);

  return (
    <StyledAvater width={width} height={height}>
      <Avatar
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
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
