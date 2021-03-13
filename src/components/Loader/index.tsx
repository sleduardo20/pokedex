import * as S from './styles';

const Loader = () => {
  return (
    <S.Container>
      <S.Pokeball src="/img/pokeball.svg" />
      <S.Base />
      <span>Loading...</span>
    </S.Container>
  );
};

export default Loader;
