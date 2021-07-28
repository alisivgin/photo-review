import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionTypes";

const initState = { isOpen: false };

function subState(state = initState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, isOpen: true };
    case CLOSE_MODAL:
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export default subState;
