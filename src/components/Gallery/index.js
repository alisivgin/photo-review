import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ApprovedPhoto from "./ApprovedPhoto";

const PHOTO_DIMENSION = "18rem";

const Container = styled.ul`
  flex: 8;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  margin-top: 2rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${PHOTO_DIMENSION});
  grid-template-rows: repeat(auto-fill, ${PHOTO_DIMENSION});
  overflow-y: auto;
  grid-gap: 2rem;
`;

export default function Gallery() {
  const { approved } = useSelector(
    ({ approved }) => ({
      approved: Object.values(approved).reverse(),
    }),
    shallowEqual
  );
  return (
    <Container>
      {approved.map(({ id, url }) => (
        <ApprovedPhoto key={id} url={url} />
      ))}
    </Container>
  );
}
