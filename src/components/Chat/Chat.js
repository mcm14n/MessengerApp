import React from "react";
import ConnectedChatThread from "../../containers/ConnectedChatThread";
import ConnectedChatBox from "../../containers/ConnectedChatBox";

export default function Chat({ messages }) {
  return (
    <>
      <ConnectedChatThread />
      <ConnectedChatBox />
    </>
  );
}
