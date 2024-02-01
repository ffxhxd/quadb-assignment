import { useEffect, useState } from "react";
import { SINGLE_MOVIE_API } from "./Constants";

const useSingleMovie = (id) => {
  const [movieData, setMovieData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(SINGLE_MOVIE_API + id);
      const json = await data.json();
      console.log("api called");
      setMovieData(json);
    } catch (e) {
      console.log(e.message);
    }
  };

  return movieData;
};

export default useSingleMovie;
