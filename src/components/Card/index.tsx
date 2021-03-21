import Link from 'next/link';

import * as S from './styles';

type Image = {
  small: string;
  large: string;
};

type Attacks = {
  name: string;
  damage: string;
  text: string;
};

type Weaknesses = {
  type: string;
  value: string;
};

type Resistances = {
  type: string;
  value: string;
};

type Set = {
  id: string;
  name: string;
};

export interface CardProps {
  id: string;
  name: string;
  images: Image;
  attacks: Attacks[];
  resistances: Resistances[];
  set: Set;
  weaknesses: Weaknesses[];
  size?: 'normal' | 'large';
}

const Card: React.FC<CardProps> = ({ id, images, name, children }) => {
  return (
    <S.Container size="normal">
      <Link
        key={id}
        href={`${process.env.NEXT_PUBLIC_HOSTNAME}details/${name}`}
      >
        <a>
          <img src={images.large} alt={name} />

          {children}
        </a>
      </Link>
    </S.Container>
  );
};

export default Card;
