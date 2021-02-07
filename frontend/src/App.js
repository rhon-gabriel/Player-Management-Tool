import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppContainer from "./containers/AppContainer/AppContainer";
import HomePage from "./containers/HomePage/HomePage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/players" component={AppContainer} />
      </Switch>
    </Router>
  );
};

export default App;
