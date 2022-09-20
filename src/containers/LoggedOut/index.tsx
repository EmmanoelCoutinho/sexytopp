import LoginPopUp from '../../components/LoginPopUp';

import { Container } from './styles';

function LoggedOut() {
  return (
    <Container>
      <LoginPopUp />
    </Container>
  );
}

export default LoggedOut;
