import { combineReducers } from "redux";
import playersReducer from "../containers/Players/redux/reducer"

const rootReducer = combineReducers({
  players: playersReducer,
});

export default rootReducer;
