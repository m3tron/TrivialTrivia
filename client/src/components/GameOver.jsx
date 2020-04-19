import React from "react";

const GameOver = ({ usersAnswers }) => {
  return usersAnswers.map(usersAnswer => (
    <>
      <h1>You selected: {usersAnswer.usersAnswer}</h1>
      <h1>Correct answer: {usersAnswer.correctAnswer}</h1>
    </>
  ));
};

export default GameOver;
