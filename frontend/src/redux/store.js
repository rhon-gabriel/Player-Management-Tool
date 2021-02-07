import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import createSagaMiddleware from "redux-saga";
import "regenerator-runtime/runtime";
import playersSaga from "../containers/Players/redux/saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(playersSaga);

export default store;
