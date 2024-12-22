import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorElement";
import Home from "./routes/Home";
import "./index.css";
import Root from "./routes/Root";
import ConstructionPage from "./routes/ConstructionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home/>,
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
      }
    ],
  },
  {
    path: "/signup",
    element: <ConstructionPage url="Signup" />
  },
  {
    path: "/search",
    element: <ConstructionPage url="Search" />
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
