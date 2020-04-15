import React from "react";
import he from "he";
import { Button } from "@material-ui/core";

const Answer = ({ answer, checkAnswer }) => {
  return (
    <Button
      variant="contained"
      value={answer}
      onClick={() => checkAnswer(answer)}
    >
      {he.decode(answer)}
    </Button>
  );
};

export default Answer;
