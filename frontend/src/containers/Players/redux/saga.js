import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_PLAYERS_START,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILURE,
  UPDATE_PLAYER_START,
  UPDATE_PLAYER_SUCCESS,
  UPDATE_PLAYER_FAILURE,
} from "./constants";
import { getPlayers, updatePlayer } from "helpers/api/players";

function* getPlayersSaga() {
  try {
    const res = yield call(getPlayers);
    yield put({
      type: GET_PLAYERS_SUCCESS,
      results: res.data,
    });
  } catch (error) {
    yield put({
      type: GET_PLAYERS_FAILURE,
      error,
    });
  }
}

export function* updatePlayerSaga(action) {
  try {
    const res = yield call(updatePlayer, action.payload);
    yield put({
      type: UPDATE_PLAYER_SUCCESS,
      results: res.data,
    });
    yield put({
      type: GET_PLAYERS_START
    });
  } catch (error) {
    yield put({
      type: UPDATE_PLAYER_FAILURE,
      error,
    });
  }
}

export default function* playersSaga() {
  yield takeLatest(GET_PLAYERS_START, getPlayersSaga);
  yield takeLatest(UPDATE_PLAYER_START, updatePlayerSaga);
}
