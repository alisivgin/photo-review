import React from "react";
import { default as Mdl } from "react-modal";
import Button from "../Button";
import { LIFECYCLE } from "../../constants";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";
import { CLOSE_MODAL } from "../../store/actions/actionTypes";
import { useWindowDimensions } from "../../store/utility";
import { thumbsup, thumbsdown } from "../../assets";
import ContentLoader from "react-content-loader";
console.log(thumbsup);
const IMAGE_SCREEN_RATIO = 0.75;

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    height: "auto",
  },
  overlay: {
    // backgroundColor: "black",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
if (process.env.NODE_ENV !== "test") Mdl.setAppElement("#root");

const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  ${({ photo, wWidth, wHeight }) => {
    if (photo.data.id) {
      const { w, h } = calculateImgDimensions(wWidth, wHeight, photo);
      return `
      width: ${w}px;
      height: ${h}px;`;
    }
  }}
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 1.25rem;
`;

function Modal() {
  const { width, height } = useWindowDimensions();
  const dispatch = useDispatch();
  const { isOpen, photo } = useSelector(
    ({ modal, photo }) => ({
      isOpen: modal.isOpen,
      photo,
    }),
    shallowEqual
  );
  return (
    <Mdl
      isOpen={isOpen}
      onRequestClose={() => dispatch({ type: CLOSE_MODAL })}
      style={customStyles}
      contentLabel="Example Modal"
    >
      {photo.lifecycle === LIFECYCLE.PENDING ? (
        <ImageTypeLoader wWidth={width} wHeight={height} />
      ) : photo.lifecycle === LIFECYCLE.DONE ? (
        <>
          <ImageContainer wWidth={width} wHeight={height} photo={photo}>
            <Image
              data-testid={photo.data.id}
              src={photo.data.urls ? photo.data.urls.regular : ""}
              alt="New Image"
            />
          </ImageContainer>
          <ButtonContainer>
            <Button
              style={{ backgroundColor: "#FF616D" }}
              text="Reject"
              icon={thumbsdown}
            />
            <Button
              style={{ backgroundColor: "#66DE93" }}
              text="Approve"
              icon={thumbsup}
            />
          </ButtonContainer>
        </>
      ) : null}
    </Mdl>
  );
}

const ImageTypeLoader = (props) => {
  const { w, h } = calculateImgDimensions(props.wWidth, props.wHeight, {
    data: {
      width: 300,
      height: 300,
    },
  });
  console.log({ w, h });
  return (
    <ContentLoader
      speed={2}
      width={w}
      height={h}
      viewBox={`0 0 ${w} ${h}`}
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <rect x="0" y="0" rx="2" ry="2" width={w} height={h} />
    </ContentLoader>
  );
};

function calculateImgDimensions(wWidth, wHeight, photo) {
  const h =
    (wWidth * IMAGE_SCREEN_RATIO * photo.data.height) / photo.data.width;
  if (h > wHeight * IMAGE_SCREEN_RATIO) {
    return {
      w: (wHeight * IMAGE_SCREEN_RATIO * photo.data.width) / photo.data.height,
      h: wHeight * IMAGE_SCREEN_RATIO,
    };
  } else {
    return {
      w: wWidth * IMAGE_SCREEN_RATIO,
      h,
    };
  }
}

export default Modal;
