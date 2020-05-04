import React from "react";
import { Typography, makeStyles, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    verticalAlign: "text-bottom",
  },
});

const NavBar = ({ user }) => {
  const classes = useStyles();
  const logged = user;

  const renderLogin = () => {
    if (logged) {
      return (
        <a href="/auth/logout">
          <Button variant="contained" color="secondary">
            Logout
          </Button>
        </a>
      );
    }
    return (
      <a href="/auth/google">
        <Button variant="contained" color="secondary">
          Login with Google
        </Button>
      </a>
    );
  };

  return (
    <div className={classes.root}>
      <Link to="/">
        <Typography variant="h5">Trivial Trivia</Typography>
      </Link>
      {renderLogin()}
    </div>
  );
};

export default NavBar;
