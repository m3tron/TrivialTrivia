import React from "react";
import he from "he";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    color: "#414047",
    backgroundColor: "#d6b054",
    marginTop: "1rem",
    minWidth: "100%",
    "&:hover": {
      backgroundColor: "#d6b054",
    },
  },
});

const Answer = ({ answer, handleAnswerClick, correct_answer }) => {
  const classes = useStyles();

  return (
    <Button
      variant="contained"
      className={classes.root}
      onClick={() => handleAnswerClick(answer, correct_answer)}
    >
      {he.decode(answer)}
    </Button>
  );
};

export default Answer;
