import {
  GET_PLAYERS_START,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILURE,
  UPDATE_PLAYER_START,
  UPDATE_PLAYER_SUCCESS,
  UPDATE_PLAYER_FAILURE,
  ADD_PLAYER_START,
  ADD_PLAYER_SUCCESS,
  ADD_PLAYER_FAILURE,
  GET_PLAYER_START,
  GET_PLAYER_SUCCESS,
  GET_PLAYER_FAILURE,
  DELETE_PLAYER_START,
  DELETE_PLAYER_SUCCESS,
  DELETE_PLAYER_FAILURE,
} from "./constants";

const initialState = {
  results: null,
  player: null,
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
        ...state,
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
    case UPDATE_PLAYER_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case UPDATE_PLAYER_SUCCESS:
      return {
        ...state,
        player: action.results,
        loading: false,
        error: false,
      };
    case UPDATE_PLAYER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case ADD_PLAYER_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ADD_PLAYER_SUCCESS:
      return {
        ...state,
        player: action.results,
        loading: false,
        error: false,
      };
    case ADD_PLAYER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case DELETE_PLAYER_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case DELETE_PLAYER_SUCCESS:
      return {
        ...state,
        player: null,
        loading: false,
        error: false,
      };
    case DELETE_PLAYER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case GET_PLAYER_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case GET_PLAYER_SUCCESS:
      return {
        ...state,
        player: action.results,
        loading: false,
        error: false,
      };
    case GET_PLAYER_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
}
