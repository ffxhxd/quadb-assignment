import React from "react";
import useMovies from "../Utils/useMovies";
import MovieCard from "./MovieCard";
import Loading from "./Loading";

const MovieGrid = () => {
  const data = useMovies();

  if (!data) {
    return <Loading />;
  }

  return (
    <div className="flex flex-wrap">
      {data.map((curr, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4"
        >
          <MovieCard info={curr} />
        </div>
      ))}
    </div>
  );
};

export default MovieGrid;
