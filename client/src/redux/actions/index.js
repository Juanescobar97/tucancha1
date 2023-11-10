import axios from "axios";

export const GET_UNIFORMES = "GET_UNIFORMES";

export function getUniformes() {
  return async function (dispatch) {
    const response = await axios(`http://localhost:3000/uniformes`);

    return dispatch({
      type: GET_UNIFORMES,
      payload: response.data,
    });
  };
}
