import React from "react";
import MovieGrid from "./Components/MovieGrid";
import Header from "./Components/Header";
import Title from "./Components/Title";

const App = () => {
  return (
    <div className="bg-slate-900">
      <div className="sticky top-0  z-20">
        <Header />
      </div>
      <div>
        <Title data="Watch Now" />
      </div>
      <MovieGrid />
    </div>
  );
};

export default App;
