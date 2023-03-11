import React from "react";

function Bigger_panel_button({ updater, value }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded m-1"
      onClick={updater}>
      {value}
    </button>
  );
}

export default Bigger_panel_button;
