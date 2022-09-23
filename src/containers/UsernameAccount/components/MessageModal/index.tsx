import { setDoc, doc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { db } from '../../../../services/firestore';

import { Container, Content, Header, Body } from './styles';

interface MessageModalProps {
  isOpen: boolean;
  setIsOpen: any;
  sendTo: string;
  sendToUid: string;
  sendFrom: string;
  sendFromUid: string;
}

function MessageModal({
  sendToUid,
  sendTo,
  sendFrom,
  sendFromUid,
  isOpen,
  setIsOpen
}: MessageModalProps) {
  const [message, SetMessage] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    e.target.reset();
    setIsOpen(false);

    const sendFromDocRef = doc(db, 'users', sendToUid, 'chats', sendFromUid);
    const sendFromMessageRef = doc(
      db,
      'users',
      sendToUid,
      'chats',
      sendFromUid,
      'messages',
      message
    );

    // const sendToDocRef = doc(db, 'users', sendFromUid, 'chats');

    setDoc(sendFromDocRef, {
      send_from_me: false,
      send_at: Timestamp.now()
    });

    setDoc(sendFromMessageRef, {
      message,
      send_at: Timestamp.now()
    });
  };

  return (
    <Container>
      <Content>
        <Header>
          Envie uma nova mensagem
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoMdClose size="1.5rem" color="#7d1d39" />
          </button>
        </Header>
        <Body onSubmit={handleSubmit}>
          <span>
            Para:
            <span> {sendTo}</span>
          </span>
          <label>Mensagem:</label>
          <textarea cols={20} rows={10} onChange={(e) => SetMessage(e.target.value)} />
          <div>
            <button type="submit">Enviar</button>
          </div>
        </Body>
      </Content>
    </Container>
  );
}

export default MessageModal;
