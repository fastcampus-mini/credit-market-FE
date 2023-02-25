import { Imenu } from '@/interfaces/menu';
import React from 'react';

function Bubble({ id, children }: Imenu) {
  return (
    <li id={`bubble${id}`} className="bubble">
      <span className="icon">{children}</span>
    </li>
  );
}

export default Bubble;
