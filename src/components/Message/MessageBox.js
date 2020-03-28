import React from "react";
import styled from "styled-components";

const Styled = {
  Message: styled.span`
    background-color: #ffffff;
    border: 0.03em solid #000000;
    border-radius: 0.7em;
    box-shadow: 0.3em 0.3em 0.5em #888888;
    margin-left: 0.5em;
    padding: 1em 1.5em;
    text-align: left;
  `
};

export default function MessageBox({ message }) {
  return <Styled.Message>{message}</Styled.Message>;
}
