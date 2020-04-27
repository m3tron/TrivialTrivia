import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-between",
    verticalAlign: "text-bottom",
  },
});

const ScoreBar = ({ score }) => {
  const classes = useStyles();

  const renderScore = () => {
    if (score >= 0) {
      return <Typography variant="h5">Score: {score}</Typography>;
    }
  };

  return (
    <div className={classes.root}>
      <Typography variant="h5">Trivial Trivia</Typography>
      {renderScore()}
    </div>
  );
};

export default ScoreBar;
