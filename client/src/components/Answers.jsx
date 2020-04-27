import React, { useState, useEffect } from "react";
import Answer from "./Answer";
import { CircularProgress } from "@material-ui/core";

const Answers = ({
  correct_answer,
  incorrect_answers,
  type,
  handleAnswerClick,
}) => {
  const [multipleAnswers, setMultipleAnswers] = useState(null);
  const boolAnswers = ["True", "False"];

  const shuffleAnswers = () => {
    const answers = [...incorrect_answers, correct_answer];

    const shuffle = arr => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    };

    shuffle(answers);

    return answers;
  };

  useEffect(() => {
    if (type === "multiple") setMultipleAnswers(shuffleAnswers());
    // eslint-disable-next-line
  }, [correct_answer]);

  const renderAnswers = answersArray => {
    return answersArray.map(answer => (
      <Answer
        key={answersArray.indexOf(answer)}
        answer={answer}
        correct_answer={correct_answer}
        handleAnswerClick={handleAnswerClick}
      />
    ));
  };

  return type === "boolean" ? (
    renderAnswers(boolAnswers)
  ) : !multipleAnswers ? (
    <CircularProgress />
  ) : (
    renderAnswers(multipleAnswers)
  );
};

export default Answers;
