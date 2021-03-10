import { GetServerSideProps } from 'next';
import api from 'services/api';
import TemplateSearch, { SearchProps } from '../templates/Search';

const Search = (props: SearchProps) => {
  return <TemplateSearch {...props} />;
};
export default Search;

export const getServerSideProps: GetServerSideProps = async () => {
  const listPokemons = await api.get('cards').then(response => response.data);

  return {
    props: {
      listPokemons,
    },
  };
};
