import React from "react";
import styled from "styled-components";

const Container = styled.li`
  width: 100%;
  height: 100%;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.6rem;
  transition: 0.5s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function ApprovedPhoto({ url }) {
  return (
    <Container>
      <Image src={url} />
    </Container>
  );
}
