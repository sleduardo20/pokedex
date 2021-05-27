import { CardProps } from 'components/Card';
import { GetStaticPaths, GetStaticProps } from 'next';

import { api } from 'services/api';

import TemplateDetails, { DetailsProps } from '../../templates/Details';

const Details = (props: DetailsProps) => {
  return <TemplateDetails {...props} />;
};
export default Details;

type DataId = [
  {
    id: string;
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
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
