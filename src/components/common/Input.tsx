import React from 'react';

interface Prop {
  type: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input = ({ type, value, onChange }: Prop) => {
  return <input type={type} value={value} onChange={onChange} />;
};

export default Input;
