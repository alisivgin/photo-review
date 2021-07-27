import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: #fff;
  color: #000;
  border: 0;
  border-radius: 2px;
  width: 10rem;
  height: 1.8rem;
  cursor: pointer;
  ${({ flex }) =>
    flex &&
    `
      flex: ${flex};
  `}
`;

export default function Button({ style, text, onClicked }) {
  return (
    <Btn {...style} onClick={onClicked}>
      {text}
    </Btn>
  );
}
