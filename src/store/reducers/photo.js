import {
  START_FETCH_PHOTO,
  COMPLETE_FETCH_PHOTO,
  FAIL_FETCH_PHOTO,
} from "../actions/actionTypes";
import { LIFECYCLE } from "../../constants";

const initState = {
  lifecycle: LIFECYCLE.INITIAL,
  photo: {},
};

function subState(state = initState, action) {
  switch (action.type) {
    case START_FETCH_PHOTO:
      return { ...state, lifecycle: LIFECYCLE.PENDING, photo: {} };
    case COMPLETE_FETCH_PHOTO:
      return { ...state, lifecycle: LIFECYCLE.DONE, photo: action.photo };
    case FAIL_FETCH_PHOTO:
      return { ...state, lifecycle: LIFECYCLE.FAILED };
    default:
      return state;
  }
}

export default subState;
