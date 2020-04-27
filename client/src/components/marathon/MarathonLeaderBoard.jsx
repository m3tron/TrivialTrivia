import React from "react";
import { Typography } from "@material-ui/core";

const MarathonLeaderBoard = ({ score }) => {
  console.log(score);
  return score ? (
    <Typography variant="h1">{score}</Typography>
  ) : (
    <Typography variant="h1">top ten</Typography>
  );
};

export default MarathonLeaderBoard;
