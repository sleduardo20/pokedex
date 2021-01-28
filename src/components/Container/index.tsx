import * as S from './styles';

const Container: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <S.Pokeballs />
      {children}
    </S.Wrapper>
  );
};

export default Container;
