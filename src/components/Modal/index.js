import React from "react";
import { default as Mdl } from "react-modal";
import { LIFECYCLE } from "../../constants";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import styled from "styled-components";
import { CLOSE_MODAL } from "../../store/actions/actionTypes";

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
`;

const ImageContainer = styled.div`
  width: 55rem;
  height: 45rem;
  ${({ photo }) =>
    photo &&
    `
      height: 80%;
      width: calc(80% * ${photo.height / photo.width});
  `}
`;

function Modal() {
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
      <ImageContainer>
        {photo.lifecycle === LIFECYCLE.PENDING ? (
          <h2>Yükleniyor..</h2>
        ) : photo.lifecycle === LIFECYCLE.DONE ? (
          <Image
            data-testid={photo.data.id}
            src={photo.data.urls ? photo.data.urls.regular : ""}
            alt="New Image"
          />
        ) : null}
      </ImageContainer>
    </Mdl>
  );
}
export default Modal;
