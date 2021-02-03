import { takeLatest, put, call } from "redux-saga/effects";
import {
  GET_PLAYERS_START,
  GET_PLAYERS_SUCCESS,
  GET_PLAYERS_FAILURE,
} from "./constants";
import { getPlayers } from "helpers/api/players";

function* getPlayersSaga() {
  try {
    const res = yield call(getPlayers)
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

export default function* playersSaga() {
    yield takeLatest(GET_PLAYERS_START, getPlayersSaga)
}