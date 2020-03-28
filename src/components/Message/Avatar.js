import React from "react";
import styled from "styled-components";

const Styled = {
  Avatar: styled.img`
    margin: 0.1em 0, 1em;
    width: 4em;
    height: 2em;
    border-radius: 0.3em;
  `,
  AvatarContainer: styled.div`
    display: block;
  `,
  UserName: styled.p`
    margin: 0.1em;
    font-size: 0.8em;
  `
};

export default function Avatar({ avatar, name }) {
  return (
    <Styled.AvatarContainer>
      <Styled.Avatar src={avatar} />
      <Styled.UserName>{name}</Styled.UserName>
    </Styled.AvatarContainer>
  );
}
