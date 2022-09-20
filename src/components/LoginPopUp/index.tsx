import { useState, useContext } from 'react';
import { LoginContext } from '../../contexts/LoginPopUpContext';
import { UserContext } from '../../contexts/UserContext';

import { useRouter } from 'next/router';

import { IoCloseSharp } from 'react-icons/io5';

import Button from '../Button';
import LinkAnchor from '../LinkAnchor';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Loading from '../Loading';

import * as S from './style';

function LoginPopUp() {
  const router = useRouter();
  const auth = getAuth();
  const currentState = useContext(LoginContext);
  const { setIsSignedIn } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentError, setCurrentError] = useState('');
  const [hasError, setHasError] = useState(false);

  const errorFilter = (err: string) => {
    switch (err) {
      case 'auth/wrong-password':
        setCurrentError('Senha incorreta!');
        break;
      case 'auth/user-not-found':
        setCurrentError('Usuário não encontrado!');
        break;
      case 'auth/too-many-requests':
        setCurrentError('Muitas tentativas de login!');
      default:
        setCurrentError('Algo deu errado!');
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('isLoggedIn', 'true');
        const user = userCredential.user;
        router.push('/feed', undefined);
        setIsSignedIn(true);
        setIsLoading(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        // const errorMessage = error.message;
        errorFilter(errorCode);
        setHasError(true);
      });
  };

  return (
    <>
      {isLoading && <Loading />}
      <S.Overlay>
        <S.Container>
          <S.Form onSubmit={handleSubmit}>
            <IoCloseSharp
              className="closeButton"
              size="1.8rem"
              color="#72808E"
              onClick={() => currentState.setLoginState(!currentState.loginState)}
            />
            <S.InputContainer>
              <label>Email</label>
              <input
                type="email"
                placeholder="Insira seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Senha</label>
              <input
                type="password"
                placeholder="Insira sua senha"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <input type="checkbox" />
                <label>Lembrar-me</label>
              </div>
              {hasError ? (
                <S.ErrorNotification>
                  <strong>{currentError}</strong>
                </S.ErrorNotification>
              ) : null}
            </S.InputContainer>
            <S.ButtonsContainer>
              <Button children="Acessar" type="submit" />
              <div>
                <LinkAnchor route="/cadastro" content="Cadastre-se" />
                <button>Esqueceu sua senha?</button>
              </div>
            </S.ButtonsContainer>
          </S.Form>
        </S.Container>
      </S.Overlay>
    </>
  );
}

export default LoginPopUp;

//lolla1991@gmail.com
