import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const PHOTO_DIMENSION = "12rem";

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

export default function ApprovedPhoto({ id, url }) {
  const [ref, loaded, onLoad] = useImageLoaded();
  return (
    <Container>
      <Image ref={ref} onLoad={onLoad} src={url} alt={id} />
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
