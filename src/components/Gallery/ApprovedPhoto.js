import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const PHOTO_DIMENSION = "20rem";

const Container = styled.div`
  width: ${PHOTO_DIMENSION};
  height: ${PHOTO_DIMENSION};
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 1rem;
  transition: 0.5s all ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;

export default function ApprovedPhoto({ id, url }) {
  console.log(url);
  const [ref, loaded, onLoad] = useImageLoaded();
  return (
    <Container>
      <Image ref={ref} onLoad={onLoad} src={url}></Image>
      {/* {loaded && <h1>Loaded!</h1>} */}
    </Container>
  );
}

const useImageLoaded = () => {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef();

  const onLoad = () => {
    setLoaded(true);
  };

  useEffect(() => {
    if (ref.current && ref.current.complete) {
      onLoad();
    }
  });

  return [ref, loaded, onLoad];
};
