import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import BookMovie from "./Components/BookMovie";
import Ticket from "./Components/Ticket";
import ErrorPage from "./Components/ErrorPage";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/moviedetail/:id",
    element: <MovieDetails />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/bookmovie/:id",
    element: <BookMovie />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tickets",
    element: <Ticket />,
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
