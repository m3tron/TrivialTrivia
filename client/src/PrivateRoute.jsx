import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !user ? <Redirect to="/" /> : <Component {...props} user={user} />
    }
  />
);

export default PrivateRoute;
