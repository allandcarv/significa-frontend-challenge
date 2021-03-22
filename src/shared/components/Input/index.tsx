import React, { InputHTMLAttributes, RefObject } from 'react';

import { InputContainer } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  forwardedRef: RefObject<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ forwardedRef, ...rest }) => {
  return (
    <InputContainer>
      <i className="icon__search-default" />
      <input type="text" ref={forwardedRef} {...rest} />
    </InputContainer>
  );
};

export default Input;
