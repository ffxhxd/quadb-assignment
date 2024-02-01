import React from "react";
import { MdOutlineSlowMotionVideo } from "react-icons/md";

const Title = (props) => {
  return (
    <div className=" text-3xl p-4 mt-4 md:text-4xl lg:text-5xl font-bold text-white mb-4">
      <div className="flex gap-4 items-end">
        {props.data} <MdOutlineSlowMotionVideo color="red" />
      </div>
      <div className="pt-4">
        <hr />
      </div>
    </div>
  );
};

export default Title;
