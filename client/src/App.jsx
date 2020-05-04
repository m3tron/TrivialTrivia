import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "@material-ui/core";
import axios from "axios";
import Landing from "./components/Landing";
import Game from "./components/Game";
import Menu from "./components/Menu";
import MarathonMenu from "./components/marathon/MarathonMenu";
import MarathonGame from "./components/marathon/MarathonGame";
import MarathonLeaderBoard from "./components/marathon/MarathonLeaderBoard";
import NavBar from "./components/NavBar";
import PrivateRoute from "./PrivateRoute";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user]);

  const getUser = async () => {
    const response = await axios.get("/auth/user");
    setUser(response.data);
  };

  return (
    <BrowserRouter>
      <Container>
        <NavBar user={user} />
        <Switch>
          <Route exact path="/">
            <Landing user={user} />
          </Route>
          <Route exact path="/menu" component={Menu} />
          <Route
            exact
            path="/game&:category&:difficulty&:type"
            component={Game}
          />
          <PrivateRoute
            exact
            path="/marathon-menu"
            component={MarathonMenu}
            user={user}
          />
          <PrivateRoute
            exact
            path="/marathon-game/:difficulty"
            component={MarathonGame}
            user={user}
          />
          <Route exact path="/leaderboard" component={MarathonLeaderBoard} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
