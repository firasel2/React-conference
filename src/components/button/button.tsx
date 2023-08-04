import React from 'react';
import { ButtonProps } from './interface';

const Button = ({ label, ...props }: ButtonProps) => {
  return (
    <button type="button" className="text-lg" {...props}>
      {label}
    </button>
  );
};

export default Button;
