import React from "react";
import { Typography } from "@material-ui/core";

const ScoreBar = ({ score }) => {
  return <Typography variant="body1">Score: {score}</Typography>;
};

export default ScoreBar;
