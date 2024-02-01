import { useEffect, useState } from "react";
import { MOVIES_API } from "./Constants";

const useMovies = () => {
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(MOVIES_API);
      const json = await data.json();
      setMoviesData(json);
    } catch (e) {
      console.log(e.message);
    }
  };

  return moviesData;
};

export default useMovies;
