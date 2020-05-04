import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";
import Question from "./Question";
import GameOver from "./GameOver";
import Score from "./Score";

const Game = () => {
  const [questions, setQuestions] = useState(null);
  const [usersAnswers, setUsersAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    getQuestions();
    // eslint-disable-next-line
  }, []);

  const { category, difficulty, type } = useParams();

  const createURL = () => {
    const baseURL = "https://opentdb.com/api.php?amount=10";
    const categoryURL = `&category=${category}`;
    const difficultyURL = `&difficulty=${difficulty}`;
    const typeURL = `&type=${type}`;
    const random = "random";

    if (category === random && difficulty === random && type === random)
      return baseURL;
    if (category === random && difficulty === random) return baseURL + typeURL;
    if (category === random && type === random) return baseURL + difficultyURL;
    if (difficulty === random && type === random) return baseURL + categoryURL;
    if (category === random) return baseURL + difficultyURL + typeURL;
    if (difficulty === random) return baseURL + categoryURL + typeURL;
    if (type === random) return baseURL + categoryURL + difficultyURL;
    return baseURL + categoryURL + difficultyURL + typeURL;
  };

  const URL = createURL();

  const getQuestions = async () => {
    const response = await axios.get(URL);
    setQuestions(response.data.results);
  };

  const handleAnswerClick = (answer, correct_answer) => {
    if (answer === correct_answer) setScore(score + 1);
    setUsersAnswers([
      ...usersAnswers,
      { usersAnswer: answer, correctAnswer: correct_answer },
    ]);
    setIndex(index + 1);
  };

  const renderQuestion = (questions, index) => (
    <Question
      question={questions[index].question}
      index={index}
      correct_answer={questions[index].correct_answer}
      incorrect_answers={questions[index].incorrect_answers}
      type={questions[index].type}
      handleAnswerClick={handleAnswerClick}
    />
  );

  return !questions ? (
    <CircularProgress />
  ) : (
    <>
      <Score score={score} />
      {index === questions.length ? (
        <GameOver usersAnswers={usersAnswers} questions={questions} />
      ) : (
        renderQuestion(questions, index)
      )}
    </>
  );
};

export default Game;
