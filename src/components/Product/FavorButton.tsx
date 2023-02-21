import { createFavor } from '@/apis/favor';
import React from 'react';
import Input from '../common/Input';

interface Props {
  id: string;
  top: string;
  right: string;
}

const FavorButton = ({ id, top, right }: Props) => {
  const handleFavor = async () => {
    // await createFavor(id);
    alert('Click!❤️');
  };

  return (
    <Input
      classType="heartBtn"
      inputType="checkbox"
      id={id}
      top={top}
      right={right}
      onClick={handleFavor}
    />
  );
};

export default FavorButton;
