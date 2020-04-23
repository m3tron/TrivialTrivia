import React from "react";
import he from "he";
import { Typography, makeStyles } from "@material-ui/core";
import Answers from "./Answers";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "90vh",
    verticalAlign: "center",
    alignItems: "center",
  },
  question: {
    textAlign: "center",
    maxWidth: 600,
    marginBottom: "2rem",
  },
  answers: {
    maxWidth: 500,
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
      <div className={classes.question}>
        <Typography variant="h6">{he.decode(question)}</Typography>
      </div>
      <div className={classes.answers}>
        <Answers
          correct_answer={correct_answer}
          incorrect_answers={incorrect_answers}
          type={type}
          handleAnswerClick={handleAnswerClick}
        />
      </div>
    </div>
  );
};

export default Question;
