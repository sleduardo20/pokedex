import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: 'primary' | 'secondary' | 'darkBlue';
}

const Button: React.FC<ButtonProps> = ({
  bg = 'darkBlue',
  children,
  ...rest
}) => {
  return (
    <Container
      bg={bg}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.99 }}
      {...rest}
    >
      {children}
    </Container>
  );
};

export default Button;
