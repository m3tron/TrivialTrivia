import React from "react";
import { Link } from "react-router-dom";
import he from "he";
import { Button, Typography } from "@material-ui/core";

const GameOver = ({ usersAnswers }) => {
  return (
    <>
      <Link to="/menu">
        <Button variant="contained" color="primary">
          New Game
        </Button>
      </Link>
      {usersAnswers.map(usersAnswer => (
        <Typography variant="h4" key={usersAnswers.indexOf(usersAnswer)}>
          <>You selected: {he.decode(usersAnswer.usersAnswer)}</>
          <>Correct answer: {he.decode(usersAnswer.correctAnswer)}</>
        </Typography>
      ))}
    </>
  );
};

export default GameOver;
