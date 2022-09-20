import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { FcGoogle } from 'react-icons/fc';
import { Formik } from 'formik';
import * as Yup from 'yup';

// import { RegisterUser } from '../../../requests/user/login';

import Button from '../../components/Button';
import Input from '../../components/Input';

// import { saveData } from '../../../requests/saveData';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firestore';

import { SetInfoUser } from '../../actions/User';

import Header from '../../components/Header';

import { ValuesUserProps } from './interfaces';

import {
  Container,
  Buttons,
  Form,
  FormContainer,
  FormWrapper,
  ImageContainer,
  ImageLogin
} from './styles';

function RegisterAuth() {
  const router = useRouter();
  const dispatch = useDispatch();
  const provider = new GoogleAuthProvider();

  const [loading, setLoading] = useState(false);
  const [userInfos, setUserInfos] = useState<ValuesUserProps>({
    username: '',
    password: '',
    confirm_password: '',
    email: '',
    confirm_email: ''
  });

  const validateFields = Yup.object().shape({
    username: Yup.string().required(),
    password: Yup.string().min(6).required(),
    confirm_password: Yup.string()
      .oneOf([Yup.ref('password'), null], '')
      .required(),
    email: Yup.string().email().required(),
    confirm_email: Yup.string()
      .oneOf([Yup.ref('email'), null], '')
      .required()
  });

  const handleSubmit = async (values: ValuesUserProps) => {
    try {
      const auth = getAuth();
      const response = await createUserWithEmailAndPassword(auth, values.email, values.password);

      const dataUser = {
        name: values.username,
        email: values.email,
        key_id: response.user.uid,
        last_sign_at: response.user.metadata.lastSignInTime || ''
      };

      setDoc(doc(db, 'users', dataUser.key_id), {
        username: dataUser.name,
        email: dataUser.email,
        uid: dataUser.key_id,
        followers: 0,
        following: 0,
        avatar_img:
          'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?b=1&k=20&m=1300845620&s=170667a&w=0&h=JbOeyFgAc6-3jmptv6mzXpGcAd_8xqkQa_oUK2viFr8=',
        banner_img: 'https://images.alphacoders.com/546/thumb-1920-546091.jpg'
      });

      // dispatch(SetInfoUser(dataUser));

      router.push('/feed', undefined, { shallow: true });
      setLoading(true);
      // fim do try
    } catch (error: any) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const LoginWithGoogle = async () => {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result) || {
          accessToken: 'não logado'
        };
        const token = credential.accessToken;

        const user = result.user;
        const values = {
          token: token,
          user: user
        };
        return values;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        const email = error.email;

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };

  return (
    <>
      <Container>
        <ImageContainer>
          <ImageLogin src="/assets/images/pages/bgLogin.jpg" />
        </ImageContainer>
        <FormContainer>
          <img src="/assets/images/logo.png" />
          <FormWrapper>
            <div className="text-login ">
              <span>Check-out de associação</span>
              <h2>Abra sua conta!</h2>
            </div>
            <Formik
              initialValues={{
                username: '',
                password: '',
                confirm_password: '',
                email: '',
                confirm_email: ''
              }}
              validationSchema={validateFields}
              onSubmit={(values) => {
                setUserInfos(values);
              }}>
              {(props) => (
                <Form onSubmit={props.handleSubmit}>
                  <Input
                    error={props.errors.username}
                    errorMessage={props.errors.username}
                    type="text"
                    name="username"
                    label="Nome de usuário"
                    messagePosition="bottom"
                  />
                  <Input
                    error={props.errors.password}
                    errorMessage={props.errors.password}
                    name="password"
                    type="password"
                    label="Senha"
                    messagePosition="bottom"
                  />
                  <Input
                    error={props.errors.confirm_password}
                    errorMessage={props.errors.confirm_password}
                    name="confirm_password"
                    type="password"
                    label="Confirme a senha"
                    messagePosition="bottom"
                  />
                  <Input
                    error={props.errors.email}
                    errorMessage={props.errors.email}
                    name="email"
                    type="email"
                    label="Endereço de e-mail"
                    messagePosition="bottom"
                  />
                  <Input
                    error={props.errors.confirm_email}
                    errorMessage={props.errors.confirm_email}
                    name="confirm_email"
                    type="email"
                    label="Confirme o endereço de e-mail"
                    messagePosition="bottom"
                  />
                  <Buttons>
                    <Button
                      loading={loading}
                      type="submit"
                      fontBold
                      onClick={() => handleSubmit(userInfos)}>
                      Cadastrar
                    </Button>
                    <Button type="button" flex fontBold onClick={LoginWithGoogle}>
                      <FcGoogle />
                      Cadastre-se com o google
                    </Button>
                  </Buttons>
                </Form>
              )}
            </Formik>
          </FormWrapper>
        </FormContainer>
      </Container>
    </>
  );
}

export default RegisterAuth;

// function auth(auth: any, provider: GoogleAuthProvider) {
//   throw new Error('Function not implemented.');
// }
