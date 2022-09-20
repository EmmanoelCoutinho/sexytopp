import { useContext } from 'react';

import { UserContext } from '../../contexts/UserContext';

import { AiOutlineHome } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import { BsChatDots } from 'react-icons/bs';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';

import Link from 'next/link';

import { Container } from './styles';

const FooterMenu = () => {
  const { notifications } = useContext(UserContext);

  const size = '26px';
  const color = '#7d1d39';

  return (
    <Container>
      <Link href="/members">
        <div>
          <CgSearch size={size} color={color} />
        </div>
      </Link>

      <Link href="/notifications">
        <div>
          <AiOutlineBell size={size} color={color} />
          {notifications.length > 0 ? (
            <div className="notification">{notifications.length}</div>
          ) : null}
        </div>
      </Link>
      <Link href="/feed">
        <div>
          <AiOutlineHome size={size} color={color} />
        </div>
      </Link>
      <Link href="/chat">
        <div>
          <BsChatDots size={size} color={color} />
        </div>
      </Link>
      <Link href="/profile">
        <div>
          <AiOutlineUser size={size} color={color} />
        </div>
      </Link>
    </Container>
  );
};

export default FooterMenu;
