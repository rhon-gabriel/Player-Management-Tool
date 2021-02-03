import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "./containers/Players/redux/actions";

const App = () => {
  const { results, loading, error } = useSelector((state) => state.players);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.getPlayers());
  }, []); // eslint-disable-line

  return <div className="App">Player Management Tool</div>;
};

export default App;
