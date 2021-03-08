import { Form } from '@unform/web';
import { FiPower, FiSearch } from 'react-icons/fi';

import Button from 'components/Button';
import Container from 'components/Container';
import { Content } from 'components/Content';
import Header from 'components/Header';
import Input from 'components/Input';
import Logo from 'components/Logo';
import Card from 'components/Card';
import Icon from 'components/Icon';

import mockCard from '../../components/Card/mock';

import * as S from './styles';

const TemplateSeach = () => {
  return (
    <Container>
      <Header>
        <Content>
          <S.HeaderContent>
            <div>
              <Logo />
              <Icon link="http://localhost:3000" icon={<FiPower />}>
                Sair
              </Icon>
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
          <Card {...mockCard} size="normal" slug={mockCard.name} />
          <Card {...mockCard} size="normal" slug={mockCard.name} />
          <Card {...mockCard} size="normal" slug={mockCard.name} />
          <Card {...mockCard} size="normal" slug={mockCard.name} />
          <Card {...mockCard} size="normal" slug={mockCard.name} />
          <Card {...mockCard} size="normal" slug={mockCard.name} />
        </S.WrapperCards>
      </Content>
    </Container>
  );
};

export default TemplateSeach;
