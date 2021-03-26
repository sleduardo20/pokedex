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

export interface DetailsProps {
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
}

const Details = ({
  id,
  name,
  attacks,
  retreatCost,
  resistances,
  set,
  weaknesses,
  images,
  artist,
  rarity,
}: DetailsProps) => {
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
        <S.WrapperDetails>
          <S.SectionCard>
            <Card id={id} name={name} images={images} size="large" />
          </S.SectionCard>

          <S.SectionDetails>
            <h2>{name}</h2>

            {attacks?.map(item => (
              <S.Attacks key={item.name}>
                <h3>
                  {item.name} | {item.damage}
                </h3>
                <p>{item.text}</p>
              </S.Attacks>
            ))}

            <S.Particulars>
              {weaknesses && (
                <S.Feature>
                  <strong>WEAKNESS</strong>
                  {weaknesses.map(item => (
                    <div key={item.type}>
                      <span>{item.type}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </S.Feature>
              )}

              {resistances && (
                <S.Feature>
                  <strong>RESISTANCES</strong>
                  {resistances.map(item => (
                    <div key={item.type}>
                      <span>{item.type}</span>
                      <span>{item.value}</span>
                    </div>
                  ))}
                </S.Feature>
              )}

              {retreatCost && (
                <S.Feature>
                  <strong>RETREAT COST</strong>
                  <span>{retreatCost[0]}</span>
                </S.Feature>
              )}

              {artist && (
                <S.Feature>
                  <strong>ARTIST</strong>
                  <span>{artist}</span>
                </S.Feature>
              )}
              {rarity && (
                <S.Feature>
                  <strong>ARTIST</strong>
                  <span>{rarity}</span>
                </S.Feature>
              )}

              {set && (
                <S.Feature>
                  <strong>SET</strong>
                  <span>{set.name}</span>
                </S.Feature>
              )}
            </S.Particulars>
          </S.SectionDetails>
        </S.WrapperDetails>
      </Content>
    </Container>
  );
};

export default Details;
