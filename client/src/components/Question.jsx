import React from "react";
import he from "he";
import { Typography, makeStyles } from "@material-ui/core";
import Answers from "./Answers";

const useStyles = makeStyles({
  root: {
    display: "grid",
    justifyContent: "center",
  },
});

const Question = ({
  question,
  correct_answer,
  incorrect_answers,
  type,
  handleAnswerClick,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6">{he.decode(question)}</Typography>
      <Answers
        correct_answer={correct_answer}
        incorrect_answers={incorrect_answers}
        type={type}
        handleAnswerClick={handleAnswerClick}
      />
    </div>
  );
};

export default Question;
