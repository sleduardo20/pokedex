import Card, { CardProps, Image } from 'components/Card';
import Container from 'components/Container';
import Content from 'components/Content';
import Header from 'components/Header';
import Icon from 'components/Icon';
import Logo from 'components/Logo';
import { FiArrowLeft, FiPower } from 'react-icons/fi';

import * as S from './styles';

type Attacks = {
  name: string;
  damage: string;
  text: string;
};

type Weaknesses = {
  type: string;
  value: string;
};

type Resistances = {
  type: string;
  value: string;
};

type Set = {
  id: string;
  name: string;
};

export type Data = {
  id: string;
  name: string;
  attacks?: Attacks[];
  resistances?: Resistances[];
  set?: Set;
  weaknesses?: Weaknesses[];
  images: Image;
  retreatCost?: string[];
  artist?: string;
  rarity?: string;
};

export interface DetailsProps {
  data: Data[];
}

const Details = ({ data }: DetailsProps) => {
  return (
    <Container>
      <Header>
        <Content>
          <S.HeaderContent>
            <Icon link="/search" icon={<FiArrowLeft />} />
            <Logo size="medium" />
            <Icon link="/" icon={<FiPower />}>
              <span>Sair</span>
            </Icon>
          </S.HeaderContent>
        </Content>
      </Header>
      <Content>
        {data.map(detail => (
          <S.WrapperDetails key={detail.id}>
            <S.SectionCard>
              <Card id={detail.id} name={detail.name} images={detail.images} />
            </S.SectionCard>

            <S.SectionDetails>
              <h2>{detail.name}</h2>

              {detail.attacks?.map(item => (
                <S.Attacks key={item.name}>
                  <h3>
                    {item.name} | {item.damage}
                  </h3>
                  <p>{item.text}</p>
                </S.Attacks>
              ))}

              <S.Particulars>
                {detail.weaknesses && (
                  <S.Feature>
                    <strong>WEAKNESS</strong>
                    {detail.weaknesses.map(item => (
                      <div key={item.type}>
                        <span>{item.type}</span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </S.Feature>
                )}

                {detail.resistances && (
                  <S.Feature>
                    <strong>RESISTANCES</strong>
                    {detail.resistances.map(item => (
                      <div key={item.type}>
                        <span>{item.type}</span>
                        <span>{item.value}</span>
                      </div>
                    ))}
                  </S.Feature>
                )}

                {detail.retreatCost && (
                  <S.Feature>
                    <strong>RETREAT COST</strong>
                    <span>{detail.retreatCost[0]}</span>
                  </S.Feature>
                )}

                {detail.artist && (
                  <S.Feature>
                    <strong>ARTIST</strong>
                    <span>{detail.artist}</span>
                  </S.Feature>
                )}
                {detail.rarity && (
                  <S.Feature>
                    <strong>ARTIST</strong>
                    <span>{detail.rarity}</span>
                  </S.Feature>
                )}

                {detail.set && (
                  <S.Feature>
                    <strong>SET</strong>
                    <span>{detail.set.name}</span>
                  </S.Feature>
                )}
              </S.Particulars>
            </S.SectionDetails>
          </S.WrapperDetails>
        ))}
      </Content>
    </Container>
  );
};

export default Details;
