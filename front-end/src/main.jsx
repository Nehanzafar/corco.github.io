import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorElement";
import Home from "./routes/Home";
import "./index.css";
import {loader as homeLoader} from "./routes/Home";
import {loader as recipeLoader} from "./routes/RecipeCard";
import Root from "./routes/Root";
import ConstructionPage from "./routes/ConstructionPage";
import RecipeCard from "./routes/RecipeCard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: homeLoader,
      },
      {
        path: "/meal-plans",
        element: <ConstructionPage url={"Meal plans"}/>,
      },
      {
        path: "/explore",
        element: <ConstructionPage url={"Explore"}/>
      },
      {
        path: "/contact",
        element: <ConstructionPage url={"Contact"}/>
      },
      {
        path: "/about",
        element: <ConstructionPage url={"About"}/>
      },
      {
        path: "/search",
        element: <ConstructionPage url={"Search"} />
      },
      {
        path: "/RecipeCard/:recipeId",
        element: <RecipeCard />,
        loader: recipeLoader,
      },
    ],
  },
  {
    path: "/signup",
    element: <ConstructionPage url="Signup" />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
