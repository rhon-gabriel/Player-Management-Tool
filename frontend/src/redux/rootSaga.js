import { all } from 'redux-saga/effects'
import playersSaga from '../containers/Players/redux/saga'

export default function* rootSaga() {
  yield all([
    playersSaga(),
  ])
}