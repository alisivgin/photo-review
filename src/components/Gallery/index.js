import React from "react";
import styled from "styled-components";

const PHOTO_DIMENSION = "12rem";

const Container = styled.div`
  flex: 8;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  margin-top: 2rem;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${PHOTO_DIMENSION});
  grid-template-rows: repeat(auto-fill, ${PHOTO_DIMENSION});
  overflow-y: auto;
  grid-gap: 0.5rem;
`;

const Photo = styled.div`
  width: ${PHOTO_DIMENSION};
  height: ${PHOTO_DIMENSION};
  background-color: #000;
  /* grid-column: 1 / 2;
  grid-row: 1 / 2;
  ${({ columnStart, columnLength, rowStart, rowLength }) =>
    columnStart &&
    columnLength &&
    rowStart &&
    rowLength &&
    `
      grid-column: ${columnStart} / span ${columnLength};
      grid-row: ${rowStart} / span ${rowLength};
  `} */
`;

export default function Gallery() {
  return (
    <Container>
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </Container>
  );
}
