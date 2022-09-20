import { FiMoreVertical } from 'react-icons/fi';

import { MainContainer } from './styles';

function FriendsWarp({ username, specs, state, avatar_img, location }: any) {
  return (
    <>
      <MainContainer>
        <div className="left">
          <img src={avatar_img} alt={username} />
        </div>
        <div className="middle">
          <strong>{username}</strong>
          <div className="specs">
            <span>{specs}</span>
            <span>{location}</span>
          </div>
        </div>
        <div className="right">
          <button>{state}Seguindo</button>
          <FiMoreVertical size="18px" color="#7d1d39" />
        </div>
      </MainContainer>
    </>
  );
}

export default FriendsWarp;
