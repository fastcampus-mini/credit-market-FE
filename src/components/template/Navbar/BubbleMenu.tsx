import { Imenu } from '@/interfaces/menu';
import React from 'react';
import { Link } from 'react-router-dom';

function BubbleMenu({ id, children, route }: Imenu) {
  return (
    <li id={`menu${id}`} className="menuElement">
      <Link to={route}>{children}</Link>
    </li>
  );
}

export default BubbleMenu;
