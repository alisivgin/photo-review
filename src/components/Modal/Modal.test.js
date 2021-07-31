import React from "react";
import { renderWithState } from "../../store/utility";
import { screen } from "@testing-library/react";

import Modal from "./index";
import { default as Mdl } from "react-modal";
import { DONE } from "../../constants/lifecycle";

const initialState = {
  photo: {
    lifecycle: DONE,
    data: {
      id: "m0NP22fehM0",
      urls: {
        small:
          "https://i.picsum.photos/id/216/200/300.jpg?hmac=c3OXbiUxWPMgwnaFpX8ZAfBL5TZzWjnof6mb4OwuSPs",
      },
    },
  },
  modal: { isOpen: true },
};

Mdl.setAppElement(document.createElement("div"));
describe("Modal", () => {
  it("should display image", async () => {
    renderWithState(<Modal />, { initialState });

    const Image = screen.getByTestId("m0NP22fehM0");
    expect(Image).toBeTruthy();
  });
});
