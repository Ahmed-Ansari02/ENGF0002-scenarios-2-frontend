import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Project_item from "../components/Project_item";

function Questions_page() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://127.0.0.1:5000/get");
      const data = await res.json();
      console.log(data);
      setData(data);
    }
    fetchData();
  }, []);

  function return_difficulty(difficulty) {
    if (difficulty === 1) {
      return "Easy";
    } else if (difficulty === 2) {
      return "Medium";
    } else {
      return "Hard";
    }
  }

  function redirect(data) {}

  function return_question(obj) {
    var question = [];
    for (let prop in obj) {
      question.push(
        <Project_item
          Question={parseInt(prop) + 1}
          Difficulty={return_difficulty(obj[prop].difficulty)}
          redirect={
            <Link
              to="/practice"
              state={obj[prop]}
              className="w-full col-span-1 bg-blue-500 hover:bg-green-700 rounded w-full h-full box-border flex justify-center items-center">
              {" "}
              practice{" "}
            </Link>
          }
          key={prop}
        />
      );
    }
    return question;
  }

  return (
    <div className="h-full w-full">
      <h1 className=" text-white font-bold text-3xl mt-4">
        {" "}
        Choose a question to practice{" "}
      </h1>
      <div className="flex flex-col justify-center items-center mt-7">
        {return_question(data)}
      </div>
    </div>
  );
}

export default Questions_page;
