import { useState, useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { getAuth, signOut } from 'firebase/auth';

import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { GrConfigure } from 'react-icons/gr';
import { BiExit } from 'react-icons/bi';

import { ProfileContainer, MenuContainer, ModalSettingsContainer, Overlay } from './styles';

function MenuWrapper() {
  const { userData } = useContext(UserContext);

  const size = '20px';

  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        router.push('/');
        localStorage.removeItem('userUid');
        localStorage.setItem('isLoggedIn', 'false');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div onClick={() => setShowMenu(!showMenu)}>
        <ProfileContainer className={showMenu ? 'actived' : ''}>
          <img src={userData.avatar_img} alt="imagem do usuário" />
        </ProfileContainer>

        {showMenu ? (
          <MenuContainer>
            <Overlay onClick={() => setShowMenu(false)} />
            <ModalSettingsContainer>
              <span className="page-title" onClick={() => setShowMenu(false)}>
                Menu do Usuário <span className="close-button"></span>
                <AiOutlineCloseCircle />
              </span>
              <div className="profile">
                <img src={userData.avatar_img} alt="imagem do usuário" />
                <h3>{userData.username}</h3>
                <h4>@{userData.username}</h4>
                <div>
                  <span>
                    <strong>{userData.followers}</strong>Seguidores
                  </span>
                  <span>
                    <strong>{userData.following}</strong>Seguindo
                  </span>
                </div>
              </div>
              <div className="buttons">
                <Link href="/profile">
                  <button>
                    <CgProfile size={size} />
                    Acessar perfil
                  </button>
                </Link>
                <Link href="/#">
                  <button>
                    <GrConfigure size={size} />
                    Acessar Configurações
                  </button>
                </Link>
                <button onClick={logout}>
                  <BiExit size={size} />
                  Sair da conta
                </button>
              </div>
            </ModalSettingsContainer>
          </MenuContainer>
        ) : null}
      </div>
    </>
  );
}

export default MenuWrapper;
