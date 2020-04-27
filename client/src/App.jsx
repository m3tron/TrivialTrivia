import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import Landing from "./components/Landing";
import Game from "./components/Game";
import Menu from "./components/Menu";
import MarathonMenu from "./components/marathon/MarathonMenu";
import MarathonGame from "./components/marathon/MarathonGame";
import MarathonLeaderBoard from "./components/marathon/MarathonLeaderBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/menu" component={Menu} />
          <Route
            exact
            path="/game&:category&:difficulty&:type"
            component={Game}
          />
          <Route exact path="/marathon-menu" component={MarathonMenu} />
          <Route
            exact
            path="/marathon-game/:difficulty"
            component={MarathonGame}
          />
          <Route exact path="/leaderboard" component={MarathonLeaderBoard} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
