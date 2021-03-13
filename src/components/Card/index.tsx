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
  supertype?: string;
  level?: string;
  hp?: string;
  types?: [];
  evolvesTo?: [];
  images: Image;
  rules?: [];
  attacks?: Attacks[];
  weaknesses?: Weaknesses[];
  resistances?: Resistances[];
  retreatCost?: [];
  set?: Set;
  artist?: string;
  rarity?: string;
}

const Card: React.FC<CardProps> = ({ name, images, children }) => {
  return (
    <S.Container size="normal">
      <Link href={`http://localhost:3000/details/${name}`}>
        <a>
          <img src={images.large} alt={name} />

          {children}
        </a>
      </Link>
    </S.Container>
  );
};

export default Card;
