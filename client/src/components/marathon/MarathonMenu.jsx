import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";
import ScoreBar from "../ScoreBar";

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
      <ScoreBar />
      <div className={classes.root}>
        <Typography variant="h5">Select Difficulty</Typography>
        <Button className={classes.difficulty}>Easy</Button>
        <Button className={classes.difficulty}>Medium</Button>
        <Button className={classes.difficulty}>Hard</Button>
      </div>
    </>
  );
};

export default MarathonMenu;
