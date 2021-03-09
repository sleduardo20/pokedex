import { Form } from '@unform/web';
import Button from 'components/Button';

import Container from 'components/Container';
import Content from 'components/Content';
import Header from 'components/Header';
import Input from 'components/Input';
import Logo from 'components/Logo';
import { useRouter } from 'next/dist/client/router';

import * as S from './styles';

const Home: React.FC = () => {
  const { push } = useRouter();

  return (
    <Container>
      <Header>
        <Content>
          <S.HeaderContent>
            <Logo size="large" />
          </S.HeaderContent>
        </Content>
      </Header>

      <Content>
        <S.WrapperForm>
          <Form
            onSubmit={() => {
              push('/search');
            }}
          >
            <Input
              name="user"
              placeholder="Nome do usuário ou email"
              type="text"
            />
            <Input name="password" placeholder="Senha" />
            <Button bg="secondary" type="submit">
              Entrar
            </Button>
          </Form>
        </S.WrapperForm>
      </Content>
    </Container>
  );
};

export default Home;
