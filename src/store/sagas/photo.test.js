import * as matchers from "redux-saga-test-plan/matchers";
import { expectSaga } from "redux-saga-test-plan";
import {
  FETCH_PHOTO,
  START_FETCH_PHOTO,
  COMPLETE_FETCH_PHOTO,
  FAIL_FETCH_PHOTO,
  OPEN_MODAL,
} from "../actions/actionTypes";

import {
  getRandomPhoto,
  getPhotoUntilNotRejected,
  photoApi,
  repeatPhotoApi,
} from "./photo";

describe("getRandomPhoto", () => {
  const storeState = {
    rejected: ["jECS_UkyFZ0"],
  };
  it("should call api and dispatch success action", async () => {
    const randomPhoto = {
      id: "4SAZr5I6XIU",
    };
    return expectSaga(getRandomPhoto)
      .withState(storeState)
      .put({
        type: START_FETCH_PHOTO,
      })
      .put({
        type: OPEN_MODAL,
      })
      .provide([
        // mack api call
        [matchers.call.fn(photoApi), { data: randomPhoto }],
      ])
      .put({
        type: COMPLETE_FETCH_PHOTO,
        photo: randomPhoto,
      })
      .dispatch({ type: FETCH_PHOTO })
      .run(1000);
  });

  it("should get rejected photo and redirect another saga to fetching another photo", async () => {
    const randomPhoto1 = { id: "jECS_UkyFZ0" };
    const randomPhoto2 = { id: "4SAZr5I6XIU" };
    return expectSaga(getRandomPhoto)
      .withState(storeState)
      .provide([
        // mack api call
        [matchers.call.fn(photoApi), { data: randomPhoto1 }],
        [matchers.call.fn(repeatPhotoApi), { data: randomPhoto2 }],
      ])
      .put({ type: START_FETCH_PHOTO })
      .put({ type: OPEN_MODAL })
      .spawn(getPhotoUntilNotRejected, storeState.rejected)
      .put({
        type: COMPLETE_FETCH_PHOTO,
        photo: randomPhoto2,
      })
      .spawn(getRandomPhoto)
      .dispatch({ type: FETCH_PHOTO })
      .run(5000);
  });

  it("should return fail in case of error", async () => {
    return expectSaga(getRandomPhoto)
      .withState(storeState)
      .put({
        type: START_FETCH_PHOTO,
      })
      .put({
        type: OPEN_MODAL,
      })
      .provide([
        // mack api call
        [matchers.call.fn(photoApi), Promise.reject("error")],
      ])
      .put({ type: FAIL_FETCH_PHOTO })
      .dispatch({ type: FETCH_PHOTO })
      .run(1000);
  });
});
