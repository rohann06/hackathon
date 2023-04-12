/* eslint-disable @next/next/no-img-element */
import React from "react";

const LearningCard = ({ image, title, tags }) => {
  return (
    <div className=" bg-white drop-shadow-lg dark:bg-slate-700 flex flex-col justify-center w-[20rem] lg:w-[23rem] rounded-lg overflow-hidden ">
      <div className="   h-[13rem] w-full">
        <img
          className=" cursor-pointer bg-cover h-full w-full hover:scale-105 duration-300"
          src={image}
          alt="img"
        />
      </div>
      <div className=" p-3 mt-3">
        <h3 className=" dark:text-white text-lg font-semibold">{title}</h3>
        <div className=" flex items-center gap-2">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="bg-slate-500 w-fit font-medium text-white px-3 py-1 rounded-full my-3"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LearningCard;
