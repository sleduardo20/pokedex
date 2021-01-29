import { Form } from '@unform/web';
import Button from 'components/Button';

import Container from 'components/Container';
import Input from 'components/Input';
import Logo from 'components/Logo';

import * as S from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <S.Header>
        <Logo />
      </S.Header>

      <S.WrapperForm>
        <Form onSubmit={() => {}}>
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
    </Container>
  );
};

export default Home;
