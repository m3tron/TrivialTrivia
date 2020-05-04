import React from "react";
import { Typography } from "@material-ui/core";

export default ({ score }) => {
  return !score ? null : <Typography variant="h5">Score: {score}</Typography>;
};
