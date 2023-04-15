import React from "react";
import LearningCard from "../../Interface/LearningCard";
import Carosal from "../../Interface/Carosal";

const MyLearnings = ({leardatas}) => {
  return (
    <div className=" my-10">
      <h2 className=" text-3xl font-bold">My Learnings</h2>

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

export default MyLearnings;
