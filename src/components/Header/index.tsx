import Link from 'next/link';

import { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginPopUpContext';

import LinkAnchor from '../LinkAnchor';

import SandwichMenu from '../SandwichMenu';
import Button from '../Button';

import * as S from './styles';

function Header() {
  const currentState = useContext(LoginContext);

  return (
    <S.MaxContainer>
      <S.Container>
        <S.ImageContainer>
          <Link href="/">
            <S.Logo src="/assets/images/logo.png" alt="logo sexytopp" />
          </Link>
        </S.ImageContainer>
        <S.LinksContainer>
          <LinkAnchor route="/" content="INICIAL" size=".8rem" />
          <LinkAnchor route="#" content="ENCONTRE SEU PARCEIRO" size=".8rem" />
          <LinkAnchor route="/feed" content="FEED DE FANTASIAS" size=".8rem" />
          <LinkAnchor route="#" content="COMUNIDADE" size=".8rem" />
          {/* <LinkAnchor route="#" content="SOMOS TODOS SEXY TOPP" size=".8rem" /> */}
        </S.LinksContainer>
        <S.ButtonContainer>
          <Button white flex onClick={() => currentState.setLoginState(!currentState.loginState)}>
            Entrar
          </Button>
        </S.ButtonContainer>
        <div className="sandwich_menu">
          <SandwichMenu />
        </div>
      </S.Container>
    </S.MaxContainer>
  );
}

export default Header;
