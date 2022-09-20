import Button from '../Button';

// IMPORTANDO OS ICONES DO FOOTER
import { FiInstagram } from 'react-icons/fi';
import { GrTwitter } from 'react-icons/gr';
import { FaFacebookF, FaSnapchatGhost } from 'react-icons/fa';
import { ImYoutube } from 'react-icons/im';

import * as S from './styles';

function Footer() {
  return (
    <>
      <S.FooterContainer>
        <S.InfoContainer>
          <span>Sexy Topp</span>
          <a href="#">Membors da comunidade</a>
          <a href="#">Feed</a>
          <a href="#">Grupos da comunidade</a>
          <a href="#">Atividades da comunidade</a>
        </S.InfoContainer>
        <S.InfoContainer>
          <span>Mapa do site</span>
          <a href="#">Encontre seu parceiro de fantasias</a>
          <a href="#">Home</a>
          <a href="#">Nossas Histórias</a>
          <a href="#">Termos & Condições</a>
        </S.InfoContainer>
        <S.InfoContainer>
          <span>conecte-se</span>
          <a href="#">
            <FiInstagram />
            Instagram
          </a>
          <a href="#">
            <GrTwitter />
            Twitter
          </a>
          <a href="#">
            <FaFacebookF />
            Facebook
          </a>
          <a href="#">
            <ImYoutube />
            Youtube
          </a>
          <a href="#">
            <FaSnapchatGhost />
            Snapchat
          </a>
        </S.InfoContainer>
        <S.InfoContainer>
          <span>Inscreva-se na SexyTopp</span>
          <p>Sexy Topp para que você encontre seu parceiro de vida.</p>
          <Button children="INSCREVA-SE AGORA" />
        </S.InfoContainer>
      </S.FooterContainer>
      <S.LogoFooter>
        <img src="/assets/images/logoBranco.png" alt="SexyTopp logo footer" />
        <p>
          <b>©2021 Sexy Topp – Todos os direitos reservados.</b>
        </p>
      </S.LogoFooter>
    </>
  );
}

export default Footer;
