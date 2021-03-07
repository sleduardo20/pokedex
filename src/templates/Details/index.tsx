import { Form } from '@unform/web';
import { FiPower, FiSearch } from 'react-icons/fi';

import Button from 'components/Button';
import Container from 'components/Container';
import { Content } from 'components/Content';
import Header from 'components/Header';
import Input from 'components/Input';
import Logo from 'components/Logo';
import Card from 'components/Card';

import mockCard from '../../components/Card/mock';

import * as S from './styles';
import mock from '../../components/Card/mock';

const TemplateDetails = () => {
  return (
    <Container>
      <Header>
        <Content>
          <S.HeaderContent>
            <div>
              <Logo />
              <S.Icon>
                Sair
                <FiPower />
              </S.Icon>
            </div>
            <Form onSubmit={() => {}}>
              <Input
                type="text"
                name="search"
                placeholder="Search"
                icon={<FiSearch />}
              />
              <Button type="submit">Buscar</Button>
            </Form>
          </S.HeaderContent>
        </Content>
      </Header>
      <Content>
        <S.WrapperCards>
          <Card {...mockCard} size="normal" />
          <Card {...mockCard} size="normal" />
          <Card {...mockCard} size="normal" />
          <Card {...mockCard} size="normal" />
          <Card {...mockCard} size="normal" />
          <Card {...mockCard} size="normal" />
          <Card {...mockCard} size="normal" />
          <Card {...mockCard} size="normal" />
          <Card {...mockCard} size="normal" />
        </S.WrapperCards>
      </Content>
    </Container>
  );
};

export default TemplateDetails;
