import React from "react";
import he from "he";
import { Typography } from "@material-ui/core";
import Answers from "./Answers";

const Question = ({
  question,
  correct_answer,
  incorrect_answers,
  type,
  handleAnswerClick,
}) => {
  return (
    <>
      <Typography variant="h6">{he.decode(question)}</Typography>
      <Answers
        correct_answer={correct_answer}
        incorrect_answers={incorrect_answers}
        type={type}
        handleAnswerClick={handleAnswerClick}
      />
    </>
  );
};

export default Question;
