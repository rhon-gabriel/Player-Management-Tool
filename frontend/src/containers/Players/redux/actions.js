import {
  GET_PLAYERS_START,
  UPDATE_PLAYER_START,
  GET_PLAYER_START,
  DELETE_PLAYER_START,
  ADD_PLAYER_START,
} from "./constants";

export function getPlayers() {
  return {
    type: GET_PLAYERS_START,
  };
}

export function updatePlayer(params) {
  return {
    type: UPDATE_PLAYER_START,
    payload: params,
  };
}

export function addPlayer(params) {
  return {
    type: ADD_PLAYER_START,
    payload: params,
  };
}

export function deletePlayer(id) {
  return {
    type: DELETE_PLAYER_START,
    payload: id,
  };
}

export function getPlayer(id) {
  return {
    type: GET_PLAYER_START,
    payload: id,
  };
}
