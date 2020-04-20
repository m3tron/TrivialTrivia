import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
  button: {
    backgroundColor: "#d9ceb6",
    color: "#414047",
    "&:hover": {
      backgroundColor: "#d6b054",
    },
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography variant="h4">Welcome to Trivial Trivia</Typography>
      </div>

      <div>
        <Link to="/menu">
          <Button className={classes.button}>Login with Google</Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
