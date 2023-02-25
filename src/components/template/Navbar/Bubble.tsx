import React from 'react';

interface Prop {
  id: number;
  children: any;
}

function Bubble({ id, children }: Prop) {
  return (
    <li id={`bubble${id}`} className="bubble">
      <span className="icon">{children}</span>
    </li>
  );
}

export default Bubble;
