import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./errorElement";
import Home from "./routes/Home";
import "./index.css";
import Root from "./routes/Root";

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
        element: <div className="">Main course</div>,
      },
      {
        path: "/explore",
        element: <div className="">Explore</div>
      },
      {
        path: "/contact",
        element: <div className="">contact</div>
      },
      {
        path: "/about",
        element: <div className="">about</div>
      }
    ],
  },
  {
    path: "/signin",
    element: <div>Sign in page under progress</div>
  },
  {
    path: "/search",
    element: <div>Search page under progress</div>
  },
  
  

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
