import {
  put,
  call,
  take,
  spawn,
  select,
  fork,
  delay,
} from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_PHOTO,
  START_FETCH_PHOTO,
  COMPLETE_FETCH_PHOTO,
  FAIL_FETCH_PHOTO,
  OPEN_MODAL,
} from "../actions/actionTypes";

export function photoApi() {
  return axios.get(
    "https://api.unsplash.com/photos/random?client_id=8eYwm9uxXdhDD_z8PxnN9nek1XOvXG7UUSwtHCh3AqU"
  );
}
export function repeatPhotoApi() {
  return axios.get(
    "https://api.unsplash.com/photos/random?client_id=8eYwm9uxXdhDD_z8PxnN9nek1XOvXG7UUSwtHCh3AqU"
  );
}

export function* getRandomPhoto() {
  //wait for the FECTH_PHOTO action
  yield take(FETCH_PHOTO);
  //send OPEN_MODAL action to reducer
  yield put({ type: OPEN_MODAL });
  try {
    yield put({ type: START_FETCH_PHOTO });
    const rejected = yield select(({ rejected }) => rejected);
    // fetch photo
    let { data: photo } = yield call(photoApi);
    // if photo is rejected fetch another photo
    if (rejected.includes(photo.id)) {
      yield spawn(getPhotoUntilNotRejected, rejected);
      return;
    } else {
      yield put({ type: COMPLETE_FETCH_PHOTO, photo });
    }
  } catch (error) {
    yield put({ type: FAIL_FETCH_PHOTO });
  } finally {
    yield spawn(getRandomPhoto);
  }
}

export function* getPhotoUntilNotRejected(rejected) {
  while (true) {
    const { data: newPhoto } = yield call(repeatPhotoApi);
    if (!rejected.includes(newPhoto.id)) {
      yield put({ type: COMPLETE_FETCH_PHOTO, photo: newPhoto });
      break;
    }
    yield delay(500);
  }
}
