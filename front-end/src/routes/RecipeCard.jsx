import React from "react";
import fetchRecipeById from "../api/recipes.js";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const recipe = await fetchRecipeById(params.recipeId);
  return { recipe };
}

const RecipeCard = () => {
  const { recipe } = useLoaderData();

  return (
    <div>
      {recipe.extendedIngredients.map((ingredient) => (<div>

        <h1>
        {ingredient.name}:

        </h1>
        {ingredient.measures.metric.amount}       
        <span>
          {" " + ingredient.measures.metric.unitShort},
          </span>

      </div> 
        )
      )
      }
    </div>
  );
};

export default RecipeCard;
