/* eslint-disable @next/next/no-img-element */
import Carosal from "@/components/Interface/Carosal";
import React from "react";

const TopCatagories = ({ catagories }) => {
  console.log("catagorie", catagories);
  return (
    <div className=" my-10">
      <h2 className=" text-3xl text-white font-bold">Top categories</h2>

      <Carosal>
        {catagories.map((catagorie, index) => {
          return (
            <div className=" my-5" key={index}>
              <div className="  overflow-hidden rounded-lg h-[17rem] w-[20rem]">
                <img
                  className="  cursor-pointer bg-cover h-full w-full hover:scale-105 duration-300"
                  src={catagorie.image}
                  alt="catagorieImg"
                />
              </div>
              <p className=" mt-2 font-bold text-white text-lg">
                {catagorie.name}
              </p>
            </div>
          );
        })}
      </Carosal>
    </div>
  );
};

export default TopCatagories;
