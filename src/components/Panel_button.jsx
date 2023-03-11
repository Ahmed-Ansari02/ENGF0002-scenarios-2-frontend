import React from "react";

function Panel_button({ updater, value }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0.5 px-1  rounded m-1"
      onClick={updater}>
      {value}
    </button>
  );
}

export default Panel_button;
