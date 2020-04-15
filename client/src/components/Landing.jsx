import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@material-ui/core";

const Landing = () => {
  return (
    <>
      <Typography variant="h4">Welcome to Trivial Trivia</Typography>
      <Typography variant="body1">Login to start</Typography>
      <Link to="/menu">
        <Button>Login with Google</Button>
      </Link>
    </>
  );
};

export default Landing;
