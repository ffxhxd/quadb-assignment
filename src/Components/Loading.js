import React from "react";
import { LOADING_IMAGE } from "../Utils/Constants";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#1c273a] z-50">
      <img src={LOADING_IMAGE} alt="Loading...." className=" h-100 w-100" />
    </div>
  );
};

export default Loading;
