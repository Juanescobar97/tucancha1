import { GET_UNIFORMES } from "../actions";

let initialState = { allUniformes: [], uniformesCopy: [], posts: [] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_UNIFORMES:
      return { ...state, allUniformes: action.payload,
      uniformesCopy: action.pauload };
    default:
      return state;
  }
}

export default rootReducer;
