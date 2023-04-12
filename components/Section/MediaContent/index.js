import React from "react";
import MyLearnings from "../MyLearnings";
import TopCatagories from "../TopCatagories";
import Populer from "../Populer";

const catagories = [
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg",
    name: "Design",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg",
    name: "Development",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg",
    name: "Marketing",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg",
    name: "IT and Software",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg",
    name: "Business",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg",
    name: "Photography",
  },
  {
    image:
      "https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg",
    name: "Music",
  },
];

const leardatas = [
  {
    image:
      "https://images.unsplash.com/photo-1600195077909-46e573870d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "The Complete Python Bootcamp",
    tags: ["python"], 
  },
  {
    image:
      "https://images.unsplash.com/photo-1600195077909-46e573870d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "The Complete ReactJS Bootcamp",
    tags: ["react", "webdevelopment"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1600195077909-46e573870d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "The Complete JavaScript Bootcamp",
    tags: ["JavaScript"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1600195077909-46e573870d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "machine learning in Python",
    tags: ["machineLearning"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1600195077909-46e573870d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "HTML, CSS, JS",
    tags: ["webDeveloper"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1600195077909-46e573870d99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    name: "The Complete Rust Bootcamp From Zero to Hero ",
    tags: ["Rust"],
  },
];

const MediaContent = () => {
  return (
    <div className=" mx-2 lg:mx-0">
      {/* Mylearnings */}
      <MyLearnings leardatas={leardatas} />

      {/*Top categories */}
      <TopCatagories catagories={catagories} />

      {/*Populer */}
      <Populer leardatas={leardatas}  />
    </div>
  );
};

export default MediaContent;
