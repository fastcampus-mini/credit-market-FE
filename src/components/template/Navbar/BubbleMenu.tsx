import React from 'react';
import { Link } from 'react-router-dom';

interface Prop {
  id: number;
  children: any;
  route: string;
}

function BubbleMenu({ id, children, route }: Prop) {
  return (
    <li id={`menu${id}`} className="menuElement">
      <Link to={route}>{children}</Link>
    </li>
  );
}

export default BubbleMenu;
