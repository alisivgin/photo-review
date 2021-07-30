import React from "react";
import { renderWithState } from "../../store/utility";
import { screen } from "@testing-library/react";

import Gallery from "./index";

const initialState = {
  approved: {
    T9xCtkmIaCM: {
      id: "T9xCtkmIaCM",
      url: "image1-url",
    },
    VKPlaGw27I0: {
      id: "VKPlaGw27I0",
      url: "image2-url",
    },
  },
};

describe("Gallery", () => {
  it("list correct count of image", async () => {
    renderWithState(<Gallery />, { initialState });

    const ImageList = screen.getByRole("list");
    expect(ImageList).toBeInTheDocument();
    const Images = screen.getAllByRole("listitem");
    expect(Images).toHaveLength(2);
  });

  it("displays last image first", async () => {
    renderWithState(<Gallery />, { initialState });
    const Images = screen.getAllByRole("listitem");
    expect(Images[0].firstChild.src).toEqual(
      expect.stringContaining("image2-url")
    );
  });
});
