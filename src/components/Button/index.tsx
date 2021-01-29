import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bg: 'primary' | 'secondary' | 'darkBlue';
}

const Button: React.FC<ButtonProps> = ({
  bg = 'darkBlue',
  children,
  ...rest
}) => {
  return (
    <Container bg={bg} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
