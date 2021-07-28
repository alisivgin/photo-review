import { REJECT_PHOTO } from "../actions/actionTypes";

const initState = [];

function subState(state = initState, action) {
  switch (action.type) {
    case REJECT_PHOTO:
      return [...state, action.photoId];
    default:
      return state;
  }
}

export default subState;
