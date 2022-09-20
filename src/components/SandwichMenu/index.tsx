import { useState, useContext } from 'react';
import { LoginContext } from '../../contexts/LoginPopUpContext';

import { HiMenuAlt2 } from 'react-icons/hi';
import { IoCloseSharp } from 'react-icons/io5';

import { useRouter } from 'next/router';

import Link from 'next/link';
import LinkAnchor from '../LinkAnchor';
// import Button from '../Button';

import * as S from './style';

function SandwichMenu() {
  const router = useRouter();
  const currentState = useContext(LoginContext);

  const size = '2rem';

  const [isClosed, setIsClosed] = useState(true);

  const handleClick = () => {
    setIsClosed(!isClosed);
    currentState.setLoginState(!currentState.loginState);
  };

  return (
    <>
      <button
        onClick={() => setIsClosed(!isClosed)}
        type="button"
        style={{ border: 'none', backgroundColor: 'inherit' }}>
        {isClosed ? <HiMenuAlt2 size={size} /> : <IoCloseSharp size={size} />}
      </button>
      {isClosed ? null : (
        <S.SandwichContainer>
          <S.LinkContainer>
            <LinkAnchor route="/" content="INICIAL" />
            <LinkAnchor route="#" content="ENCONTRE SEU PARCEIRO" />
            <LinkAnchor route="/feed" content="FEED DE FANTASIAS" />
            <LinkAnchor route="/perfil" content="PERFIL" />
            <LinkAnchor route="#" content="SOMOS TODOS SEXY TOPP" />
            <S.Login children="Entrar" onClick={handleClick} />
            <Link href="/cadastro">
              <S.Register children="Cadastrar" />
            </Link>
          </S.LinkContainer>
        </S.SandwichContainer>
      )}
    </>
  );
}

export default SandwichMenu;
