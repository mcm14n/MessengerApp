import React from "react";
import styled from "styled-components";

const Styled = {
  ChatContainer: styled.div`
    background-color: #f8f8ff;
    border: 0.05em solid #000000;
    border-radius: 0.3em;
    height: 30em;
    padding: 1em 0.5em;
    overflow-y: scroll;
  `
};

export default function ChatThread({ messages }) {
  return (
    <Styled.ChatContainer>
      {messages.map(message => (
        <div>{message}</div>
      ))}
    </Styled.ChatContainer>
  );
}
