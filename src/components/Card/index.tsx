import * as S from './styles';

export interface CardProps {
  title: string;
  size: 'normal' | 'large';
  src: string;
}

const Card: React.FC<CardProps> = ({ title, size, src, children }) => {
  return (
    <S.Container size={size}>
      <img src={src} alt={title} />
      {children}
    </S.Container>
  );
};

export default Card;
