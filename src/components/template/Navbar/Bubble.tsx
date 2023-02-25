import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';

export interface IBubble {
  id: number;
  children: any;
}

function Bubble({ id, children }: IBubble) {
  return (
    <BubbleStyle id={`bubble${id}`}>
      <span className="icon">{children}</span>
    </BubbleStyle>
  );
}

export default Bubble;

const BubbleStyle = styled.li`
  background-color: ${COLORS.white};
  width: 50px;
  height: 50px;
  bottom: 85px;
  border-radius: 50%;
  z-index: 10;
  transform: translateY(120%);
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    opacity: 0;
  }

  #bubble1 {
    transform: translateY(0%);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  #bubble1 > span {
    opacity: 0.7;
  }
`;
