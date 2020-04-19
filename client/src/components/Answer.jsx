import React from "react";
import he from "he";
import { Button } from "@material-ui/core";

const Answer = ({ answer, handleAnswerClick, correct_answer }) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => handleAnswerClick(answer, correct_answer)}
    >
      {he.decode(answer)}
    </Button>
  );
};

export default Answer;
