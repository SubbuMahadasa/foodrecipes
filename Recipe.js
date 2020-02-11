import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipo}>
      <h1>{title}</h1>
      <p>{calories}</p>
      <ol>
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img src={image} alt=""></img>
    </div>
  );
};
export default Recipe;
