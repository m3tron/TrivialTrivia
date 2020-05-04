import React from "react";
import { Link } from "react-router-dom";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    textAlign: "center",
  },
  difficulty: {
    backgroundColor: "#d6b054",
    color: "#414047",
    "&:hover": {
      backgroundColor: "#d9ceb6",
    },
    margin: "1rem",
    width: 250,
  },
});

const MarathonMenu = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.root}>
        <Typography variant="h5">Select Difficulty</Typography>
        <Link to="/marathon-game/easy">
          <Button className={classes.difficulty}>Easy</Button>
        </Link>
        <Link to="/marathon-game/medium">
          <Button className={classes.difficulty}>Medium</Button>
        </Link>
        <Link to="/marathon-game/hard">
          <Button className={classes.difficulty}>Hard</Button>
        </Link>
      </div>
    </>
  );
};

export default MarathonMenu;
