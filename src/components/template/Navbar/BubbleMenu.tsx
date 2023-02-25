import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { IBubble } from './Bubble';

interface IBubbleMenu extends IBubble {
  route: string;
}

function BubbleMenu({ id, children, route }: IBubbleMenu) {
  return (
    <BubbleMenuStyle id={`menu${id}`}>
      <Link to={route}>{children}</Link>
    </BubbleMenuStyle>
  );
}

export default BubbleMenu;

const BubbleMenuStyle = styled.li`
  opacity: 0.4;
  transform: translateY(100%);
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
