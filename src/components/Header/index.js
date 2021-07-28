import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { header as connect } from "../../containers";

const Container = styled.div`
  flex: 1;
  width: auto;
  height: 100%;
  padding: 0 2rem;
  background-color: #c4c4c4;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  flex: 8;
`;

function Header({ fetchPhoto }) {
  return (
    <Container>
      <Title>Your Photos</Title>
      <Button onClicked={fetchPhoto} style={{ flex: 1 }} text="Get a Photo" />
    </Container>
  );
}

export default connect(Header);
