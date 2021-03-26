import { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: 'primary' | 'secondary' | 'darkBlue';
}

const Button: React.FC<ButtonProps> = ({
  bg = 'darkBlue',
  children,
  ...rest
}) => {
  return (
    <S.Container bg={bg} {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
