import * as ACTION from "./actionTypes";

export function fetchPhoto() {
  return {
    type: ACTION.FETCH_PHOTO,
  };
}

export function approvePhoto(photoId) {
  return {
    type: ACTION.APPROVE_PHOTO,
    photoId,
  };
}

export function rejectPhoto(photoId) {
  return {
    type: ACTION.REJECT_PHOTO,
    photoId,
  };
}

export function openModal() {
  return {
    type: ACTION.OPEN_MODAL,
  };
}

export function closeModal() {
  return {
    type: ACTION.CLOSE_MODAL,
  };
}
