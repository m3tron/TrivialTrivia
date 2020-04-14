import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import Landing from "./components/Landing";
import Game from "./components/Game";
import Start from "./components/Start";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Route exact path="/" component={Landing} />
        <Route exact path="/game" component={Game} />
        <Route
          exact
          path="/game/start/:category&:difficulty&:questionnaire"
          component={Start}
        />
      </Container>
    </BrowserRouter>
  );
};

export default App;
