import React from "react";
import { Link, useParams } from "react-router-dom";
import useSingleMovie from "../Utils/useSingleMovie";
import Header from "./Header";
import Loading from "./Loading";

const MovieDetails = () => {
  const { id } = useParams();

  const showData = useSingleMovie(id);

  if (!showData) {
    return <Loading />;
  }

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="min-h-screen grid place-items-center bg-gray-900">
        <div className="rounded-md bg-gray-800 shadow-lg md:flex px-4 leading-none max-w-4xl  ">
          <div className="flex-none">
            <img
              src={showData?.image?.original ? showData?.image?.original : ""}
              alt="pic"
              className="h-72 w-56 rounded-md transform -translate-y-4 border-4 border-gray-300"
            />
          </div>

          <div className="flex-col text-gray-300">
            <p className="p-4 text-2xl font-bold">{showData.name}</p>
            <hr />
            <div className="text-md flex justify-between px-4 my-2">
              <span className="font-bold">
                {showData.runtime} min | {showData.genres.join(", ")}
              </span>
            </div>
            <p className="hidden md:block px-4 my-4 text-[11px] tracking-wide text-left">
              {showData.summary}
            </p>

            <p className="flex text-md px-4 my-2">
              Rating: {showData.rating.average}/10
              <span className="font-bold px-2">|</span>
              Status: {showData.status}
            </p>

            <Link to={`/bookmovie/${id}`}>
              <div className="text-xs mb-10">
                <button className="border border-gray-400 text-gray-400 rounded-md px-4 py-2 ml-4 mt-3 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">
                  BOOK NOW
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
