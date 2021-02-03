import {
  GET_PLAYERS_START,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILURE,
} from "./constants";

const initialState = {
  results: null,
  loading: true,
  error: false,
};

export default function playersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_PLAYERS_SUCCESS:
      return {
        results: action.results,
        loading: false,
        error: false,
      };
    case GET_PLAYERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
