import React from "react";
import styled from "styled-components";
import Chat from "../Chat/Chat";

const Styled = {
  ChatAppContainer: styled.div`
    background-color: #7575ff;
    height: 100%;
    padding: 1em;
  `,
  ChatTitle: styled.h1`
    color: #ffffff;
  `
};

export default function ChatApp({ chatroom, messages }) {
  return (
    <Styled.ChatAppContainer>
      <Styled.ChatTitle>{chatroom}</Styled.ChatTitle>
      <Chat />
    </Styled.ChatAppContainer>
  );
}
