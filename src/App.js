import "./App.css";
import Flow from "./components/Flow";
import Truth_table from "./components/Truth_table";
import { useState } from "react";
import { useCallback } from "react";

function App() {
  const [data, setData] = useState([]);
  return (
    <div className="App">
      <div className=" text-white flex justify-center items-center h-14 w-full rounded font-bold bg-blue-500"> Logic circuit simulator</div>
      <div className=" grid grid-cols-6  h-full w-full items-center justify-items-center">
        <Flow setData={setData} />
        <Truth_table outputs={data.output} inputs={data.truth_table} />
      </div>
    </div>
  );
}

export default App;
