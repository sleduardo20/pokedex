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
  const { id }: any = params;

  const { data } = await api
    .get(`/cards/${id}`)
    .then(response => response.data);

  const retreatCost = data.retreatCost ?? '';
  const resistances = data.resistances ?? '';
  const weaknesses = data.weaknesses ?? '';
  const rarity = data.rarity ?? '';
  const artist = data.artist ?? '';

  return {
    props: {
      id: data.id,
      name: data.name,
      images: data.images,
      attacks: data.attacks,
      resistances,
      set: data.set,
      weaknesses,
      retreatCost,
      rarity,
      artist,
    },
  };
};
