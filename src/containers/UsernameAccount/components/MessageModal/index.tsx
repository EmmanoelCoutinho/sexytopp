import { IoMdClose } from 'react-icons/io';

import { Container, Content, Header, Body } from './styles';

interface MessageModalProps {
  isOpen: boolean;
  setIsOpen: any;
  sendTo: string;
  sendToUid: string;
}

function MessageModal({ sendToUid, sendTo, isOpen, setIsOpen }: MessageModalProps) {
  return (
    <Container>
      <Content>
        <Header>
          Envie uma nova mensagem.
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose size="1.5rem" color="#7d1d39" />
          </button>
        </Header>
        <Body>
          <span>
            Para:
            <a href=""> {sendTo}</a>
          </span>
          <label>Mensagem:</label>
          <textarea cols={20} rows={10} />
          <div>
            <button>Enviar</button>
          </div>
        </Body>
      </Content>
    </Container>
  );
}

export default MessageModal;
