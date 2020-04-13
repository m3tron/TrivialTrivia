import React from "react";
import { Button } from "@material-ui/core";

const Category = ({ category }) => {
  return <Button>{category.name}</Button>;
};

export default Category;
