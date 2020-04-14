import React from "react";
import he from "he";

const Question = ({ question }) => {
  return <>{he.decode(question)}</>;
};

export default Question;
