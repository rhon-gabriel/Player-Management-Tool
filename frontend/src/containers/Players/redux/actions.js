import { GET_PLAYERS_START, UPDATE_PLAYER_START } from "./constants";

export function getPlayers() {
  return {
    type: GET_PLAYERS_START,
  };
}

export function updatePlayer(params) {
  return {
    type: UPDATE_PLAYER_START,
    payload: params
  };
}
