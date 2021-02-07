import { takeLatest, put, call } from "redux-saga/effects";
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
import {
  getPlayers,
  updatePlayer,
  deletePlayer,
  addPlayer,
  getPlayer,
} from "helpers/api/players";
import { message } from "antd";

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
    message.error("Something went wrong");
  }
}

export function* updatePlayerSaga(action) {
  try {
    const res = yield call(updatePlayer, action.payload);
    yield put({
      type: UPDATE_PLAYER_SUCCESS,
      results: res.data,
    });
    message.success("Player updated");
    yield put({
      type: GET_PLAYERS_START,
    });
  } catch (error) {
    yield put({
      type: UPDATE_PLAYER_FAILURE,
      error,
    });
    message.error("Something went wrong");
  }
}

export function* addPlayerSaga(action) {
  try {
    const res = yield call(addPlayer, action.payload);
    yield put({
      type: ADD_PLAYER_SUCCESS,
      results: res.data,
    });
    message.success("Player added");
    yield put({
      type: GET_PLAYERS_START,
    });
  } catch (error) {
    yield put({
      type: ADD_PLAYER_FAILURE,
      error,
    });
    message.error("Something went wrong");
  }
}

export function* getPlayerSaga(action) {
  try {
    const res = yield call(getPlayer, action.payload);
    yield put({
      type: GET_PLAYER_SUCCESS,
      results: res.data,
    });
  } catch (error) {
    yield put({
      type: GET_PLAYER_FAILURE,
      error,
    });
    message.error("Something went wrong");
  }
}

export function* deletePlayerSaga(action) {
  try {
    const res = yield call(deletePlayer, action.payload);
    yield put({
      type: DELETE_PLAYER_SUCCESS,
      results: res.data,
    });
    message.success("Player deleted");
    yield put({
      type: GET_PLAYERS_START,
    });
  } catch (error) {
    yield put({
      type: DELETE_PLAYER_FAILURE,
      error,
    });
    message.error("Something went wrong");
  }
}

export default function* playersSaga() {
  yield takeLatest(GET_PLAYERS_START, getPlayersSaga);
  yield takeLatest(UPDATE_PLAYER_START, updatePlayerSaga);
  yield takeLatest(ADD_PLAYER_START, addPlayerSaga);
  yield takeLatest(GET_PLAYER_START, getPlayerSaga);
  yield takeLatest(DELETE_PLAYER_START, deletePlayerSaga);
}
