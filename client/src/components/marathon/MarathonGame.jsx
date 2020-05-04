import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, CircularProgress, makeStyles } from "@material-ui/core";
import Question from "../Question";
import MarathonLeaderBoard from "./MarathonLeaderBoard";
import Score from "../Score";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "90vh",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#d6b054",
    color: "#414047",
    "&:hover": {
      backgroundColor: "#d9ceb6",
    },
    margin: "1rem",
    width: 250,
  },
});

const MarathonGame = () => {
  const classes = useStyles();
  const { difficulty } = useParams();
  const [token, setToken] = useState(null); //token for questions
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState(null);
  const [index, setIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    getToken();
    // eslint-disable-next-line
  }, []);

  const getToken = async () => {
    const response = await axios.get(
      "https://opentdb.com/api_token.php?command=request"
    );
    setToken(response.data.token);
  };

  const getQuestions = async () => {
    const response = await axios.get(
      `https://opentdb.com/api.php?amount=1&difficulty=${difficulty}&token=${token}`
    );
    setQuestions(response.data.results);
    setIndex(0);
  };

  const renderQuestion = index => {
    if (questions) {
      return (
        <Question
          question={questions[index].question}
          correct_answer={questions[index].correct_answer}
          incorrect_answers={questions[index].incorrect_answers}
          type={questions[index].type}
          handleAnswerClick={handleAnswerClick}
        />
      );
    } else {
      return <CircularProgress color="secondary" />;
    }
  };

  const handleAnswerClick = (answer, correct_answer) => {
    if (answer === correct_answer) {
      setScore(score + 1);

      if (index >= questions.length - 1) {
        getQuestions();
      } else {
        setIndex(index + 1);
      }
    } else {
      handleGameOver();
    }
  };

  const handleGameOver = () => {
    setGameOver(true);
  };

  return (
    <>
      <div className={classes.root}>
        <Score score={score} />
        {!token ? (
          <CircularProgress color="secondary" />
        ) : (
          <>
            {!gameOver ? (
              !questions ? null : (
                renderQuestion(index)
              )
            ) : (
              <MarathonLeaderBoard score={score} />
            )}
            {questions ? null : (
              <Button className={classes.button} onClick={() => getQuestions()}>
                Start
              </Button>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default MarathonGame;
