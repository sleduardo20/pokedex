import {
  InputHTMLAttributes,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { useField } from '@unform/core';

import * as S from './styles';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  const handelOnFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleOnBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleOnFilled = useCallback(text => {
    if (text) {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  }, []);

  const handleShowPassword = useCallback(() => {
    setPasswordShow(state => !state);
  }, []);

  return (
    <S.Container isFocused={isFocused} isFilled={isFilled}>
      <label htmlFor={name}>{placeholder}</label>
      <input
        ref={inputRef}
        name={name}
        onFocus={handelOnFocus}
        onBlur={handleOnBlur}
        type={passwordShow ? 'text' : 'password'}
        onChange={e => handleOnFilled(e.target.value)}
        {...rest}
      />

      {name === 'password' && isFilled && (
        <button onClick={handleShowPassword} type="button">
          {passwordShow ? <FiEyeOff /> : <FiEye />}
        </button>
      )}
    </S.Container>
  );
};

export default Input;
