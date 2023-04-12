import Carosal from "../../Interface/Carosal";
import LearningCard from "../../Interface/LearningCard";
import React from "react";

const Populer = ({leardatas}) => {
  return (
    <div className=" my-10">
      <h2 className=" text-3xl dark:text-white font-bold">Populer</h2>

      <Carosal>
        {leardatas.map((leardata, index) => {
          return (
            <div className="  my-5" key={index}>
              <LearningCard image={leardata.image} title={leardata.name} tags={leardata.tags}/>
            </div>
          );
        })}
      </Carosal>
    </div>
  );
};

export default Populer;
