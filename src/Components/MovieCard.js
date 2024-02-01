import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <Link to={`/moviedetail/${props?.info?.show?.id}`}>
      <div className="cursor-pointer border  rounded-md relative overflow-hidden transition-transform duration-300 transform bg-gradient-to-br from-blue-500 to-purple-500 hover:scale-105 hover:shadow-xl">
        <img
          className="w-full h-80 rounded-md object-cover filter brightness-50 object-center rounded-t-lg hover:brightness-100 transition-all duration-300"
          src={props?.info?.show?.image?.original}
          alt="Movie poster"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent"></div>

        <div className="absolute inset-0 flex flex-col justify-start p-6">
          <h2 className="text-3xl font-bold text-white mb-2">
            {props?.info?.show?.name}
          </h2>
          <ul className="text-sm text-gray-200">
            <li className="truncate">
              <strong>Genres:</strong> {props?.info?.show?.genres.join(", ")}
            </li>
            <li>
              <strong>Language:</strong> {props?.info?.show?.language}
            </li>
            <li>
              <strong>Status:</strong> {props?.info?.show?.status}
            </li>
            <li>
              <strong>Premiered:</strong> {props?.info?.show?.premiered}
            </li>
            <li>
              <strong>Average Rating:</strong>{" "}
              {props?.info?.show?.rating?.average}
            </li>
            <li>
              <strong>Runtime:</strong> {props?.info?.show?.runtime} minutes
            </li>
            <li className="truncate">
              <strong>Network:</strong> {props?.info?.show?.network?.name}
            </li>
          </ul>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
