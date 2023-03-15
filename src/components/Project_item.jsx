import React from "react";
import { Link } from "react-router-dom";
let hard = "bg-red-500";
let medium = "bg-yellow-500";
let easy = "bg-green-500";

function Project_item({ Question, Difficulty, redirect }) {
  return (
    <div
      className={`grid grid-cols-4 w-7/12 h-16 rounded ${
        Difficulty === "Easy" ? easy : Difficulty === "Medium" ? medium : hard
      } justify-items-center items-center p-2 text-xl font-bold m-2`}>
      <p className="w-fit"> Q{Question} </p>
      <p className=" col-span-2"> {Difficulty} </p>
      {redirect}
    </div>
  );
}

export default Project_item;
