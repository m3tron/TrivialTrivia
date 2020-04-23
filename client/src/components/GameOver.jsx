import React from "react";
import { Link } from "react-router-dom";
import he from "he";
import { Button, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#d6b054",
    "&:hover": {
      backgroundColor: "#d9ceb6",
    },
    margin: "1rem",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
  },
  result: {
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
  },
});

const GameOver = ({ usersAnswers, questions }) => {
  const classes = useStyles();

  const textColor = (userAns, correctAns) => {
    if (userAns !== correctAns) {
      return "error";
    }
  };

  return (
    <div className={classes.root}>
      {usersAnswers.map(usersAnswer => (
        <div className={classes.result} key={usersAnswers.indexOf(usersAnswer)}>
          <Typography
            color={textColor(
              usersAnswer.usersAnswer,
              usersAnswer.correctAnswer
            )}
            variant="h6"
          >
            <>Question {usersAnswers.indexOf(usersAnswer) + 1} </>
          </Typography>
          <Typography
            color={textColor(
              usersAnswer.usersAnswer,
              usersAnswer.correctAnswer
            )}
            variant="body1"
          >
            <>You selected: {he.decode(usersAnswer.usersAnswer)}</>
          </Typography>
          <Typography
            color={textColor(
              usersAnswer.usersAnswer,
              usersAnswer.correctAnswer
            )}
            variant="body1"
          >
            <>Correct answer: {he.decode(usersAnswer.correctAnswer)}</>
          </Typography>
        </div>
      ))}
      <div className={classes.buttons}>
        <Link to="/menu">
          <Button className={classes.button}>New Game</Button>
        </Link>
        <Link to="/">
          <Button className={classes.button}>Main Menu</Button>
        </Link>
      </div>
    </div>
  );
};

export default GameOver;
