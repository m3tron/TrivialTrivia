import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
  },
  button: {
    backgroundColor: "#d6b054",
    color: "#414047",
    "&:hover": {
      backgroundColor: "#d9ceb6",
    },
    margin: "2rem",
  },
  title: {
    display: "flex",
    textAlign: "center",
  },
  gameTypes: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    width: 360,
  },
  gameType: {
    margin: "1rem",
  },
});

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h4">Welcome to Trivial Trivia</Typography>
      </div>
      <div className={classes.gameTypes}>
        <div className={classes.gameType}>
          <Link to="/menu">
            <Button className={classes.button}>Classic</Button>
          </Link>
          <Typography variant="body2">
            You answer 10 questions and receive a result at the end.
          </Typography>
        </div>
        <div className={classes.gameType}>
          <Link to="/marathon-menu">
            <Button className={classes.button}>Marathon</Button>
          </Link>
          <Typography variant="body2">
            You answer 1 question at a time and the game ends when you pick an
            incorrect answer.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Landing;
