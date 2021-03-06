import Image from 'next/image';

import * as S from './styles';

export interface CardProps {
  name: string;
  size: 'normal' | 'large';
  imageUrlHiRes: string;
}

const Card: React.FC<CardProps> = ({
  name,
  imageUrlHiRes,
  size = 'normal',
  children,
}) => {
  return (
    <S.Container size={size}>
      <img src={imageUrlHiRes} alt={name} />
      {children}
    </S.Container>
  );
};

export default Card;
