import { put, call, take, spawn } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_PHOTO,
  START_FETCH_PHOTO,
  COMPLETE_FETCH_PHOTO,
  FAIL_FETCH_PHOTO,
  OPEN_MODAL,
} from "../actions/actionTypes";

export function* getRandomPhoto() {
  yield take(FETCH_PHOTO);
  yield put({ type: OPEN_MODAL });
  try {
    yield put({ type: START_FETCH_PHOTO });
    const { data: photo } = yield call(
      axios.get,
      "https://api.unsplash.com/photos/random?client_id=8eYwm9uxXdhDD_z8PxnN9nek1XOvXG7UUSwtHCh3AqU"
    );
    yield put({ type: COMPLETE_FETCH_PHOTO, photo });
  } catch (error) {
    yield put({ type: FAIL_FETCH_PHOTO });
  } finally {
    yield spawn(getRandomPhoto);
  }
}
