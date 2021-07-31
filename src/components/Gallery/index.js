import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import ApprovedPhoto from "./ApprovedPhoto";

import { COLORS } from "../../constants";

const PHOTO_DIMENSION = "18rem";

const Container = styled.div`
  flex: 8;
`;

const ImageContainer = styled.ul`
  flex: 8;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.galleryBackground};
  width: 100%
  height: 100%;
  margin: 0;
  padding-top: 2rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, ${PHOTO_DIMENSION});
  grid-template-rows: repeat(auto-fill, ${PHOTO_DIMENSION});
  overflow-y: auto;
  grid-gap: 2rem;
`;

const Text = styled.h4`
  text-align: center;
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
      {approved.length > 0 ? (
        <ImageContainer>
          {approved.map(({ id, url }) => (
            <ApprovedPhoto key={id} url={url} />
          ))}
        </ImageContainer>
      ) : (
        <Text>You don't have any photos. Please get one.</Text>
      )}
    </Container>
  );
}
