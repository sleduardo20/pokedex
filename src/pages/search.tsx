import { GetStaticProps } from 'next';
import api from 'services/api';
import TemplateSearch, { SearchProps } from '../templates/Search';

const Search = (props: SearchProps) => {
  return <TemplateSearch {...props} />;
};
export default Search;

export const getStaticProps: GetStaticProps = async () => {
  const data = await api.get<SearchProps>('cards').then(response => {
    const dataFormated = response.data.data.map(item => ({
      id: item.id,
      name: item.name,
      images: item.images,
      attacks: item.attacks || [],
      resistances: item.resistances || [],
      set: item.set,
      weaknesses: item.weaknesses || [],
    }));

    return dataFormated;
  });

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24, // 24hs
  };
};
