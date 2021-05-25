import { useEffect, useRef, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { FiArrowLeft, FiArrowRight, FiPower, FiSearch } from 'react-icons/fi';

import Button from 'components/Button';
import Container from 'components/Container';
import Content from 'components/Content';
import Header from 'components/Header';
import Input from 'components/Input';
import Logo from 'components/Logo';
import Card, { CardProps } from 'components/Card';
import Icon from 'components/Icon';
import Loader from 'components/Loader';

import { api } from '../../services/api';
import * as S from './styles';

export interface SearchProps {
  cards: CardProps[];
  page: string;
}

interface FormData {
  name: string;
}

const TemplateSeach = ({ cards }: SearchProps) => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToasts();

  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);
  const [pokemon, setPokemon] = useState<CardProps[]>([]);
  const [initialValues, setInitialValues] = useState<CardProps[]>([]);

  useEffect(() => {
    const fethData = async () => {
      await api
        .get('cards', {
          params: {
            page,
            pageSize: 6,
          },
        })
        .then(response => {
          const cardsData = response.data.data.map((card: CardProps) => ({
            id: card.id,
            name: card.name,
            images: card.images,
          }));

          setPokemon(cardsData);
          setInitialValues(cardsData);
        })
        .catch(response => setError(response.error))
        .finally(() => setloading(false));
    };

    fethData();
  }, [page]);

  const handleSubmit = async ({ name }: FormData) => {
    await api
      .get(`cards?q=name:${name}*`)
      .then(response => {
        const cardsData = response.data.data.map((card: CardProps) => ({
          id: card.id,
          name: card.name,
          images: card.images,
        }));

        if (cardsData.length === 0) {
          addToast('Pokemon não encontrado, tente novamente!', {
            appearance: 'warning',
            autoDismiss: true,
          });
        }

        setPokemon(cardsData);
      })
      .catch(response => {
        addToast('Erro na conexão, existe caracteres inválidos', {
          appearance: 'error',
          autoDismiss: true,
        });
      });
  };

  const handleClear = () => {
    formRef.current?.clearField('name');
    setPokemon(initialValues);
  };

  return (
    <Container>
      <Header>
        <Content>
          <S.HeaderContent>
            <div>
              <Logo />
              <Icon link="/" icon={<FiPower />}>
                Sair
              </Icon>
            </div>
            <Form onSubmit={handleSubmit} ref={formRef}>
              <Input
                type="text"
                name="name"
                placeholder="Nome do pokemon..."
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
      {loading ? (
        <Loader />
      ) : (
        <Content>
          <S.WrapperContent>
            {pokemon.length > 0 && (
              <S.WrapperCards>
                <FiArrowLeft
                  size={34}
                  onClick={() => setPage(page === 1 ? 1 : page - 1)}
                />

                <S.GridCards>
                  {pokemon.map(card => (
                    <Card key={card.id} {...card} />
                  ))}
                </S.GridCards>
                <FiArrowRight size={34} onClick={() => setPage(page + 1)} />
              </S.WrapperCards>
            )}
          </S.WrapperContent>
        </Content>
      )}
    </Container>
  );
};

export default TemplateSeach;
