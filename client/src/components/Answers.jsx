import React from "react";
import Answer from "./Answer";

const Answers = ({ correct_answer, incorrect_answers, type }) => {
  const answers = [];
  incorrect_answers.map(incorrect_answer => answers.push(incorrect_answer));
  answers.push(correct_answer);

  const boolAnswers = ["True", "False"];

  const shuffleAnswers = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  shuffleAnswers(answers);
  const checkAnswer = answer => {
    console.log(answer, correct_answer);
    if (answer === correct_answer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  };

  const renderAnswers = answersArray => {
    return answersArray.map(answer => (
      <Answer
        key={answersArray.indexOf(answer)}
        answer={answer}
        checkAnswer={checkAnswer}
      />
    ));
  };

  return type === "boolean"
    ? renderAnswers(boolAnswers)
    : renderAnswers(answers);
};

export default Answers;
