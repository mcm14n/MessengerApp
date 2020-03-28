import React from "react";
import Message from "../Message/Message";

export default function UserMessage(message) {
  const { name, avatar, text } = message;
  return <Message name={name} avatar={avatar} message={text} />;
}
