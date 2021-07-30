import { APPROVE_PHOTO } from "../actions/actionTypes";

const initState = {};

function subState(state = initState, action) {
  switch (action.type) {
    case APPROVE_PHOTO:
      return {
        ...state,
        [action.photoId]: { id: action.photoId, url: action.photoUrl },
      };
    default:
      return state;
  }
}

export default subState;
