import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CircularProgress, Typography } from "@material-ui/core";
import Question from "./Question";

const Start = () => {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    getQuestions();
  }, []);

  const { category, difficulty, questionnaire } = useParams();

  const createURL = () => {
    const baseURL = "https://opentdb.com/api.php?amount=10";
    const categoryURL = `&category=${category}`;
    const difficultyURL = `&difficulty=${difficulty}`;
    const questionnaireURL = `&type=${questionnaire}`;
    const random = "random";

    if (
      category === random &&
      difficulty === random &&
      questionnaire === random
    )
      return baseURL;
    if (category === random && difficulty === random)
      return baseURL + questionnaireURL;
    if (category === random && questionnaire === random)
      return baseURL + difficultyURL;
    if (difficulty === random && questionnaire === random)
      return baseURL + categoryURL;
    if (category === random) return baseURL + difficultyURL + questionnaireURL;
    if (difficulty === random) return baseURL + categoryURL + questionnaireURL;
    if (questionnaire === random) return baseURL + categoryURL + difficultyURL;
    return baseURL + categoryURL + difficultyURL + questionnaireURL;
  };

  const URL = createURL();

  const getQuestions = async () => {
    const response = await axios.get(URL);
    setQuestions(response.data.results);
  };

  return !questions ? (
    <CircularProgress />
  ) : (
    questions.map(question => (
      <Typography variant="body1" key={questions.indexOf(question)}>
        <Question question={question.question} />
      </Typography>
    ))
  );
};

export default Start;
