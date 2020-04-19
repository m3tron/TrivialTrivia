import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  makeStyles,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  formControl: {
    minWidth: 120,
    margin: theme.spacing(1),
  },
}));

const Menu = () => {
  const classes = useStyles();
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState("random");
  const [difficulty, setDifficulty] = useState("random");
  const [type, settype] = useState("random");

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const response = await axios.get("https://opentdb.com/api_category.php");
    setCategories(response.data.trivia_categories);
  };

  const handleCategory = e => setCategory(e.target.value);
  const handleDifficulty = e => setDifficulty(e.target.value);
  const handletype = e => settype(e.target.value);

  return !categories ? (
    <CircularProgress />
  ) : (
    <>
      <FormControl className={classes.formControl}>
        <InputLabel id="selectCategory">Category</InputLabel>
        <Select
          labelId="selectCategory"
          value={category}
          onChange={handleCategory}
        >
          <MenuItem value="random">Random</MenuItem>
          {categories.map(category => (
            <MenuItem key={category.id} value={category.id}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="selectDifficulty">Difficulty</InputLabel>
        <Select
          labelId="selectDifficulty"
          value={difficulty}
          onChange={handleDifficulty}
        >
          <MenuItem value="random">Random</MenuItem>
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Hard</MenuItem>
        </Select>
      </FormControl>
      <FormControl component="fieldset">
        <FormLabel component="legend">Type</FormLabel>
        <RadioGroup
          aria-label="type"
          name="type"
          value={type}
          onChange={handletype}
        >
          <FormControlLabel value="random" control={<Radio />} label="Random" />
          <FormControlLabel
            value="multiple"
            control={<Radio />}
            label="Multiple Choice"
          />
          <FormControlLabel
            value="boolean"
            control={<Radio />}
            label="True or False"
          />
        </RadioGroup>
      </FormControl>
      <Link to={`/game&${category}&${difficulty}&${type}`}>
        <Button>Start</Button>
      </Link>
    </>
  );
};

export default Menu;
