import Card from 'components/Card';
import Container from 'components/Container';
import Content from 'components/Content';
import Header from 'components/Header';
import Icon from 'components/Icon';
import Logo from 'components/Logo';
import { FiArrowLeft, FiPower } from 'react-icons/fi';

import * as S from './styles';

export interface DetailsProps {
  name: string;
}

const Details = ({ name }: DetailsProps) => {
  return (
    <Container>
      <Header>
        <Content>
          <S.HeaderContent>
            <Icon
              link={`${process.env.NEXT_PUBLIC_HOSTNAME}/search`}
              icon={<FiArrowLeft />}
            />
            <Logo size="medium" />
            <Icon
              link={`${process.env.NEXT_PUBLIC_HOSTNAME}`}
              icon={<FiPower />}
            >
              <span>Sair</span>
            </Icon>
          </S.HeaderContent>
        </Content>
      </Header>
      <Content>
        <S.WrapperDetails>
          <S.SectionCard>{/* <Card {...mock} /> */}</S.SectionCard>

          <S.SectionDetails>
            <h2>{name}</h2>

            <S.Attacks>
              <h3>Rules</h3>
              <p>
                When your TAG TEAM is knocked out, your opponent takes 3 Prize
                Cards.
              </p>
              <h3>Full Blitz | 150 </h3>
              <p>
                Search your deck for up to 3 Lightning Energy cards and attach
                them to 1 of your Pokémon. Then, shuffle your deck.
              </p>
              <h3>Tag Bolt-GX | 200</h3>
              <p>
                If this Pokémon has at least 3 extra Lightning Energy attached
                to it in addition to this attack's cost, this attack does 170
                damage to 1 of your opponent's Benched Pokémon. Don't apply
                Weakness and Resistance for Benched Pokémon. You can't use more
                than 1 GX attack in a game.
              </p>
            </S.Attacks>
            <S.Particulars>
              <S.Feature>
                <strong>WEAKNESS</strong>
                <span>x2</span>
              </S.Feature>
              <S.Feature>
                <strong>RESISTANCES</strong>
                <span>-20</span>
              </S.Feature>
              <S.Feature>
                <strong>RETREAT COST</strong>
                <span>Team Up</span>
              </S.Feature>
              <S.Feature>
                <strong>ARTIST</strong>
                <span>5ban Graphics</span>
              </S.Feature>
              <S.Feature>
                <strong>RARITY</strong>
                <span>Rare Ultra</span>
              </S.Feature>
              <S.Feature>
                <strong>SET</strong>
                <span>Team Up</span>
              </S.Feature>
            </S.Particulars>
          </S.SectionDetails>
        </S.WrapperDetails>
      </Content>
    </Container>
  );
};

export default Details;
