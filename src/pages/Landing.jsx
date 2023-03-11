import React from "react";

function Landing() {
  return (
    <div className="bg-black font-bold h-full w-full  text-blue-500 flex flex-col justify-center items-center">
      <div className="text-4xl mb-3">
        Welcome to Logic circuit simulator app
      </div>
      <div className="text-xl">Click on the buttons below to start:</div>
      <div className="flex flex-row justify-center items-center mt-3 font-xl">
        <button className="rounded text-white bg-blue-500 hover:bg-blue-400 px-2 py-2 m-4">
          <a href="/check">Draw logic circuit ✍️</a>
        </button>
        <button className="rounded text-white bg-blue-500 hover:bg-blue-400 px-2 py-2 m-4">
          <a href="/upload">Upload questions 💿</a>
        </button>
        <button className="rounded text-white bg-blue-500 hover:bg-blue-400 px-2 py-2 m-4">
          <a href="/practice">Practice questions ❓</a>
        </button>
      </div>
    </div>
  );
}

export default Landing;
