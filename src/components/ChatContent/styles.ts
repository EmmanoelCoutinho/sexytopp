import styled from 'styled-components';

export const ContainerByFriend = styled.div`
  display: flex;

  width: 100%;
  height: fit-content;

  font-size: 1.1rem;

  padding: 0.5rem;

  background-color: #fff;
`;

export const ContainerByMe = styled(ContainerByFriend)`
  justify-content: flex-end;
`;

export const ChatByFriend = styled.div`
  display: flex;

  width: fit-content;
  height: fit-content;

  background-color: #efefef;
  border-radius: 5px 5px 5px 0;

  padding: 0.8rem;
`;

export const ChatByMe = styled(ChatByFriend)`
  background-color: #7d1d39;
  color: #fff;
  border-radius: 5px 5px 0 5px;
`;
