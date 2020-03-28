import React, { useState } from "react";
import styled from "styled-components";
import userMessage from "../../user/userMessage";
import UserMessage from "./UserMessage";

const Styled = {
  ChatBoxContainer: styled.div`
    margin: 0.5em 0.5em;
  `
};

export default function Chatbox({ onSubmitMessage }) {
  const [text, setText] = useState(null);

  const onChangeText = evt => {
    const { value } = evt.target;
    setText(value);
  };

  const onSubmit = evt => {
    evt.preventDefault();
    const message = userMessage(text);
    const UserMsg = UserMessage(message);
    onSubmitMessage(UserMsg);
  };

  return (
    <Styled.ChatBoxContainer className="field has-addons">
      <div className="control is-expanded">
        <input
          className="input"
          type="text"
          placeholder="Type a Message..."
          onChange={onChangeText}
        />
      </div>
      <div className="control">
        <button className="button is-success" onClick={onSubmit}>
          Send
        </button>
      </div>
    </Styled.ChatBoxContainer>
  );
}
