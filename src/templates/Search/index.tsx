import dynamic from 'next/dynamic';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiPower, FiSearch } from 'react-icons/fi';

import { useRef, useState } from 'react';
import Button from 'components/Button';
import Container from 'components/Container';
import Content from 'components/Content';
import Header from 'components/Header';
import Input from 'components/Input';
import Logo from 'components/Logo';
import Card, { CardProps } from 'components/Card';
import Icon from 'components/Icon';
import Loader from 'components/Loader';

import * as S from './styles';

export interface SearchProps {
  listPokemons: {
    data: CardProps[];
  };
}

interface FormData {
  name: string;
}

const DynamicCard = dynamic(() => import('../../components/Card'), {
  loading: ({ isLoading }) => <Loader />,
});

const TemplateSeach = ({ listPokemons }: SearchProps) => {
  const formRef = useRef<FormHandles>(null);

  const [listDefault, setListDefault] = useState<CardProps[]>(
    listPokemons.data,
  );

  const [loading, setIsLoading] = useState(false);

  const [pokemons, setPokemons] = useState<CardProps[]>(listPokemons.data);

  const handleSubmit = (formData: FormData) => {
    const { name } = formData;

    const cards = listDefault.filter(pokemom =>
      pokemom.name.toLowerCase().includes(name.toLowerCase().trim()),
    );

    if (cards.length === 0) return alert('pokemom not found');

    setPokemons(cards);
  };

  const handleClear = () => {
    formRef.current?.clearField('name');
    setPokemons(listPokemons.data);
  };

  return (
    <Container>
      <Header>
        <Content>
          <S.HeaderContent>
            <div>
              <Logo />
              <Icon
                link={`${process.env.NEXT_PUBLIC_HOSTNAME}`}
                icon={<FiPower />}
              >
                Sair
              </Icon>
            </div>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input
                type="text"
                name="name"
                placeholder="Search"
                icon={<FiSearch />}
              />
              <Button type="submit">Buscar</Button>
              <Button onClick={handleClear} bg="secondary">
                Limpar
              </Button>
            </Form>
          </S.HeaderContent>
        </Content>
      </Header>
      <Content>
        <h2>{pokemons.length} Cards </h2>
        <S.WrapperCards>
          {pokemons.map(card => (
            <DynamicCard key={card.id} {...card} />
          ))}
        </S.WrapperCards>
      </Content>
    </Container>
  );
};

export default TemplateSeach;
