import Link from 'next/link';

import * as S from './styles';

export type Image = {
  small: string;
  large: string;
};

export interface CardProps {
  id: string;
  name: string;
  images: Image;
  size?: 'normal' | 'large';
}

const Card: React.FC<CardProps> = ({
  id,
  images,
  name,
  children,
  size = 'normal',
}) => {
  return (
    <S.Container size={size}>
      <Link key={id} href={`/details/${id}`}>
        <a>
          <img src={images.large} alt={name} />
          {children}
        </a>
      </Link>
    </S.Container>
  );
};

export default Card;
