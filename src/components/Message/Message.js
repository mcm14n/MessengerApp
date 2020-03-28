import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import MessageBox from "./MessageBox";

const Styled = {
  Message: styled.div`
    display: flex;
    margin-top: 0.5em;
  `
};

export default function Message({ name, avatar, message }) {
  return (
    <Styled.Message>
      <Avatar name={name} avatar={avatar} />
      <MessageBox message={message} />
    </Styled.Message>
  );
}
