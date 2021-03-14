import { CardProps } from 'components/Card';
import { GetStaticPaths, GetStaticProps } from 'next';
import api from 'services/api';
import { SearchProps } from 'templates/Search';
import TemplateDetails from '../../templates/Details';

const Details = () => {
  return <TemplateDetails />;
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const { listPokemons } = await api
    .get<SearchProps>('cards')
    .then(response => response.data);

  const paths = listPokemons.data.map(({ name }) => {
    name;
  });

  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const details = await api.get(`cards?q=name:${params}`);
  return {
    props: {},
  };
};
