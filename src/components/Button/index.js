import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  color: #fff;
  /* border: 2px solid #000; */
  border-radius: 0.3rem;
  width: 8rem;
  height: 2.4rem;
  cursor: pointer;
  padding-left: 1.2rem;
  ${({ flex }) =>
    flex &&
    `
      flex: ${flex};
  `}
  ${({ icon }) =>
    icon &&
    `
      background-image: url(${icon});
      background-size: 1.4rem;
      background-repeat: no-repeat;
      background-position: .6rem center;
  `}
  ${({ backgroundColor }) =>
    backgroundColor &&
    `
      background-color: ${backgroundColor};
  `}
`;

export default function Button({ style, text, onClicked, icon, iconPosition }) {
  return (
    <Btn {...style} onClick={onClicked} icon={icon} iconPosition={iconPosition}>
      {text}
    </Btn>
  );
}
