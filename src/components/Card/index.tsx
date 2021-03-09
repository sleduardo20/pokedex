import Link from 'next/link';

import * as S from './styles';

export interface CardProps {
  name: string;
  size: 'normal' | 'large';
  images: {
    small: string;
    large: string;
  };
  slug: string;
}

const Card: React.FC<CardProps> = ({
  name,
  images,
  size = 'normal',
  children,
  slug,
}) => {
  return (
    <S.Container size={size}>
      <Link href={`http://localhost:3000/details/${slug}`} passHref>
        <a>
          <img src={images.large} alt={name} />
          {children}
        </a>
      </Link>
    </S.Container>
  );
};

export default Card;
