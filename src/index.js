import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import BookMovie from "./Components/BookMovie";
import Ticket from "./Components/Ticket";

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/moviedetail/:id",
    element: <MovieDetails />,
  },
  {
    path: "/bookmovie/:id",
    element: <BookMovie />,
  },
  {
    path: "/tickets",
    element: <Ticket />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRoutes} />);
