import React from 'react';

interface Prop {
  type: string;
  value?: string;
}

const Input = ({ type, value }: Prop) => {
  return <input type={type} value={value} />;
};

export default Input;
