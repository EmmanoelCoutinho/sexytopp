import Head from 'next/head';
import Link from 'next/link';

import { db } from '../services/firestore';

import { useContext, useEffect } from 'react';
import { LoginContext } from '../contexts/LoginPopUpContext';

import { FaHeart } from 'react-icons/fa';
import { AiFillSmile } from 'react-icons/ai';
import { BsFillShieldLockFill } from 'react-icons/bs';

import Header from '../components/Header';
import Button from '../components/Button';
import ContentBox from '../components/ContentBox';
import Footer from '../components/Footer';

import LoginPopUp from '../components/LoginPopUp';

import * as S from '../styles/index.styles';
import { collection, query, where, getDocs } from 'firebase/firestore';

export default function Home() {
  const initialize = db;

  const { loginState } = useContext(LoginContext);

  const IconColor = '#fff';
  const IconSize = '3rem';

  return (
    <S.Container>
      <Head>
        <title>Sexy Topp – Fantasie, nós ajudamos a realizar</title>
      </Head>
      {loginState ? <LoginPopUp /> : null}
      <Header />
      <S.ContainerVideo>
        <div>
          <h1>
            <span>Fantasie</span>
            <br /> Nós ajudamos a realizar.
          </h1>
          <p>
            A ERA DA REVOLUÇÃO SEXUAL COMEÇOU, o prazer está em ser livre e o seu momento é agora!{' '}
            <br />
            Junte-se a nós, abrilhante a festa do prazer com todo o seu charme, beleza, sedução e,
            claro, uma boa dose de cumplicidade.
            <br />
            FAÇA PARTE DA COMUNIDADE QUE MAIS CRESCE NO BRASIL!
          </p>
          <Link href="/cadastro">
            <Button fontBold flex>
              Comece AGORA!
            </Button>
          </Link>
        </div>
      </S.ContainerVideo>
      <S.Paragraph>
        O que de fato importa nessa vida é ser feliz <br />
        <strong>Permita-se, ouse, fantasie e realize-se!</strong> <br />
        Esta é a comunidade e a oportunidade que você esperava
      </S.Paragraph>
      <S.ContentContainer>
        <ContentBox
          color="#7d1d39"
          icon={<FaHeart color={IconColor} size={IconSize} />}
          title="Converse com pessoas reais"
          text="Os perfis dos membros são verificados todos os dias. Sexy Topp, portanto, contém apenas membros motivados que realmente querem fazer parte da comunidade"
        />
        <ContentBox
          color="#3DBDB6"
          icon={<AiFillSmile color={IconColor} size={IconSize} />}
          title="Recursos ricos & interativos"
          text="Sexy Topp tem apenas recursos simples e eficazes para ajudá-lo a encontrar exatamente o que você quer"
        />
        <ContentBox
          color="#0089CE"
          icon={<BsFillShieldLockFill color={IconColor} size={IconSize} />}
          title="Privacidade"
          text="Seus dados são seguros e nunca serão oferecidos a empresas terceirizadas. Seu perfil está seguro na Sexy Topp."
        />
      </S.ContentContainer>
      <S.TitleSlider>
        <span>
          Sexy Topp <br />
          <ins>tem um grupo de para você!</ins>
        </span>
        <h3>
          Crie ou participe de comunidades afins ao seu desejo.
          <br />
          Conquite prêmios surpresa e Topp Coins em um jogo de interação.
          <br />
          Poste fotos reais e belas, surpreenda-nos e ganhe ainda mais prêmio com Topp Click!
        </h3>
      </S.TitleSlider>
      <S.HqContainer>
        <span>Deliciem-se com deliciosas</span>
        <span>
          <strong>
            histórias <ins>em formato de HQ's.</ins>
          </strong>
        </span>
        <p>Exclusivo para assinantes</p>
        <Button children="ver histórias" />
      </S.HqContainer>
      <S.FindContainer>
        <span>Encontre seu</span>
        <span>Seu parceiro de fantasias</span>
        <p>
          1.000 membros já enconraram seus parceiros.
          <br />
          É grátis e leva apenas alguns minutos para fazer seus primeiros encontros.
          <br />
          Então o que está esperando?
        </p>
        <Link href="/cadastro">
          <Button children="cadastre-se" />
        </Link>
      </S.FindContainer>
      <Footer />
    </S.Container>
  );
}
