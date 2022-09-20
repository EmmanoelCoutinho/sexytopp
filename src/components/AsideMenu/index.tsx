import { useContext, useState } from 'react';
import { UserContext } from '../../contexts/UserContext';

import Link from 'next/link';

import { AiOutlineHome } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import { AiOutlineBell } from 'react-icons/ai';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineUser } from 'react-icons/ai';

import MenuWrapper from '../MobileMenu';

import { Container, MenuContainer, Buttons } from './styles';

function AsideMenu() {
  const { notifications } = useContext(UserContext);

  const size = '26px';
  const color = '#7d1d39';

  return (
    <Container>
      <MenuContainer>
        <img src="/assets/images/favicon.png" alt="" />
        <Link href="/feed">
          <Buttons>
            <AiOutlineHome size={size} color={color} /> <span>Página Incial</span>
          </Buttons>
        </Link>
        <Link href="/notifications">
          <Buttons>
            <AiOutlineBell size={size} color={color} /> <span>Notificações</span>
            {notifications.length > 0 ? (
              <div className="notification">{notifications.length}</div>
            ) : null}
          </Buttons>
        </Link>
        <Link href="/chat">
          <Buttons>
            <BsChatDots size={size} color={color} /> <span>Mensagens</span>
          </Buttons>
        </Link>
        <Link href="/members">
          <Buttons>
            <CgSearch size={size} color={color} />
            <span>Buscar</span>
          </Buttons>
        </Link>
        <Link href="/profile">
          <Buttons>
            <AiOutlineUser size={size} color={color} />
            <span>Perfil</span>
          </Buttons>
        </Link>
      </MenuContainer>
      <MenuWrapper />
    </Container>
  );
}

export default AsideMenu;
