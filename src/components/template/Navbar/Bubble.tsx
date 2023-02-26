import COLORS from '@/styles/colors';
import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

interface IBubble {
  id: number;
  className?: string;
  children: any;
  route?: string;
}

function Bubble({ id, children, route }: IBubble) {
  return (
    <BubbleStyle
      id={route ? `menu${id}` : `bubble${id}`}
      className={route ? 'menuElement' : 'bubble'}
    >
      {route ? <Link to={route}>{children}</Link> : <span className="icon">{children}</span>}
    </BubbleStyle>
  );
}

export default Bubble;

const BubbleStyle = styled.li`
  &.menuElement {
    opacity: 0.4;
    transform: translateY(100%);
    cursor: pointer;

    &:hover {
      opacity: 0.5;
    }
  }

  &.bubble {
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

    &#bubble1 {
      transform: translateY(0%);
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

      span {
        opacity: 0.7;
      }
    }
  }
`;
