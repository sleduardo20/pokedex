import { GetStaticPaths, GetStaticProps } from 'next';

import api from 'services/api';

import TemplateDetails, { Data, DetailsProps } from '../../templates/Details';

const Details = (props: DetailsProps) => {
  return <TemplateDetails {...props} />;
};
export default Details;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await api
    .get<DetailsProps>('cards')
    .then(response => response.data);

  const dataId = data.data.map((item: { id: string }) => ({
    id: item.id,
  }));

  const paths = dataId.map(({ id }) => ({
    params: { id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pokemonsDetails = await api
    .get(`/cards/${params!.id}`)
    .then(response => response.data.data);

  const data = [
    {
      id: pokemonsDetails.id,
      name: pokemonsDetails.name,
      attacks: pokemonsDetails.attacks ?? [],
      resistances: pokemonsDetails.resistances ?? [],
      set: pokemonsDetails.set ?? {},
      weaknesses: pokemonsDetails.weaknesses ?? [],
      images: pokemonsDetails.images,
      retreatCost: pokemonsDetails.retreatCost ?? [],
      artist: pokemonsDetails.artist ?? '',
      rarity: pokemonsDetails.rarity ?? '',
    },
  ];

  return {
    props: {
      data,
    },
  };
};
