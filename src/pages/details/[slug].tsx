import { GetStaticPaths, GetStaticProps } from 'next';
import api from 'services/api';

import TemplateDetails, { DetailsProps } from '../../templates/Details';

const Details = (props: DetailsProps) => {
  return <TemplateDetails {...props} />;
};

export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;
  console.log(slug);

  const card = await api.get<DetailsProps[]>(`cards?q=name:pikachu`);

  return {
    props: {
      name: 'pikachu',
    },
  };
};
