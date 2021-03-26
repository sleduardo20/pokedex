import { useRef, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiPower, FiSearch } from 'react-icons/fi';

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
  data: CardProps[];
}

interface FormlistPokemons {
  name: string;
}

const TemplateSeach = ({ data }: SearchProps) => {
  const formRef = useRef<FormHandles>(null);

  const [listDefault, setListDefault] = useState<CardProps[]>(data);

  const [loading, setIsLoading] = useState(false);

  const [pokemons, setPokemons] = useState<CardProps[]>(data);

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
    setPokemons(data);
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
              <Button type="button" onClick={handleClear} bg="secondary">
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
            <Card key={card.id} {...card} />
          ))}
        </S.WrapperCards>
      </Content>
    </Container>
  );
};

export default TemplateSeach;
