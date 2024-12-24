import { useState, useEffect } from "react";
import SearchBar from "../components/search";
import { HeroParagraph, mobileHeroParagraph } from "../constants";
import Button from "../components/Button";
import RecipeDisplay from "../components/RecipeDisplay";
import { searchRecipes } from "../api/recipes.js";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import testData from "../constants/testData.json";



export async function loader() {
  var rand = Math.floor(Math.random() * 19);
  const recipesArray = [
    "Spaghetti Carbonara",
    "Chicken Tikka Masala",
      "Beef Stroganoff",
      "Vegetable Stir-Fry",
      "Margherita Pizza",
      "Caesar Salad",
      "Fish Tacos",
      "Shrimp Scampi",
      "Ramen Noodles",
      "Lentil Soup",
      "Eggplant Parmesan",
      "Classic Cheeseburger",
      "Chicken Alfredo Pasta",
      "Tomato Basil Soup",
      "Vegetarian Chili",
      "Sushi Rolls",
      "Greek Salad",
      "Chocolate Chip Cookies",
    
    ];
  const recipes = await searchRecipes(recipesArray[rand], 15);

  return [recipes];
}

const Loader = () => (
  <div className="flex justify-center items-center h-full">
    <div className="loader"></div>
  </div>
);

const ResultArray = ({ data }) => {
  const recipes = data || [];

  return (
    <div className="flex flex-wrap md:flex-row flex-col md:justify-around items-center md:mx-3 mx-1 mb-3 -mt-2">
      {recipes.map((recipe) => (
        <RecipeDisplay
        key={recipe?.id}
          recipe={recipe}
          onErrorImage={(e) =>
            (e.target.parentElement.parentElement.style.display = "none")
          }
        />
      ))}
    </div>
  );
};

// For later use
// e.target.src =
    // "https://placehold.co/270x200/FCFCFC/BCBCBC/png?text=Image+Not+Found&font=poppins"

const Home = () => {
  const recipes = useLoaderData() || [];

  return (
    <>
      <div
        role="Hero section"
        className="bg-heroImg bg-cover md:h-[100vh] h-[60vh] lg:block flex flex-col items-center justify-start"
      >
        <div className="flex flex-col lg:items-start items-center justify-center lg:w-1/2 w-auto h-full lg:ml-16">
          <h1 className="font-dancingScript lg:text-mainHeading md:text-[6rem] text-[3rem] text-backgroundColors-1 my-1">
            Search Recipes
          </h1>
          <SearchBar className={"shadow-standard my-1"} />
          <p className="hidden md:block bg-backgroundColors-1/80 text-[16px] text-secondary-1 shadow-standard my-3 p-2 rounded-[20px]  text-wrap lg:w-[45vw] w-[80vw] lg:text-left text-center">
            {HeroParagraph}
          </p>
          <p className="md:hidden block bg-backgroundColors-1/80 text-[16px] text-secondary-1 shadow-standard my-3 p-2 rounded-[20px]  text-wrap lg:w-[45vw] w-[80vw] lg:text-left text-center">
            {mobileHeroParagraph}
          </p>
          <div className="lg:block flex justify-around lg:w-auto w-full lg:px-0 md:px-12 px-8">
            <Button
              onClick={() => alert("Hello 1")}
              color={
                "bg-secondary-1 text-backgroundColors-2 hover:bg-secondary-2 hover:text-textColors-1"
              }
              className={
                "text-backgroundColors-2 md:py-3 md:my-2 py-2 md:px-8 px-4 mx-4 md:text-button md:rounded-2xl text-[1rem] hover:shadow-xl animation-home-page"
              }
            >
              Explore
            </Button>
            <Button
              onClick={() => alert("Hello 2")}
              color={
                "bg-secondary-1 text-backgroundColors-2 hover:bg-secondary-2 lg:ml-6 hover:text-textColors-1"
              }
              className={
                "text-backgroundColors-2 md:py-3 md:my-2 py-2 md:px-8 px-4 mx-4 md:text-button md:rounded-2xl text-[1rem] hover:shadow-xl animation-home-page"
              }
            >
              Random
            </Button>
          </div>
        </div>
      </div>
      <div>
        <div>
          <h1 className="font-dancingScript lg:text-mainHeading md:text-[6rem] text-[3rem] text-center mt-6 text-textColors-2">
            Popular Recipes
          </h1>
              {recipes.length ?
              <ResultArray data={recipes} /> : <ResultArray data={testData.results} />
              }
        </div>
      </div>
    </>
  );
};


ResultArray.propTypes = { 
  data: PropTypes.array,

};

export default Home;
