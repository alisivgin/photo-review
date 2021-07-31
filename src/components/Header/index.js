import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useDispatch } from "react-redux";
import { FETCH_PHOTO } from "../../store/actions/actionTypes";
import { COLORS } from "../../constants";
console.log(COLORS.headerBackground);
const Container = styled.div`
  flex: 1;
  width: auto;
  height: 100%;
  padding: 0 2rem;
  background-color: ${COLORS.headerBackground};
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h2`
  flex: 8;
`;

function Header() {
  const dispatch = useDispatch();
  return (
    <Container>
      <Title>Your Photos</Title>
      <Button
        onClicked={() => dispatch({ type: FETCH_PHOTO })}
        style={{ flex: 1, backgroundColor: "#C490E4" }}
        text="Get a Photo"
      />
    </Container>
  );
}

export default Header;
