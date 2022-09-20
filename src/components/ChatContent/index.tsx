import { ContainerByFriend, ContainerByMe, ChatByFriend, ChatByMe } from './styles';

function ChatContent() {
  return (
    <>
      <ContainerByFriend>
        <ChatByFriend>chat foda</ChatByFriend>
      </ContainerByFriend>
      <ContainerByMe>
        <ChatByMe>chat foda</ChatByMe>
      </ContainerByMe>
    </>
  );
}

export default ChatContent;
