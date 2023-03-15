import React from "react";
import Flow_practice from "../components/Flow_practice";
import Truth_table from "../components/Truth_table_practice";
import { useLocation } from "react-router-dom";

function Practice(props) {
  const location = useLocation();
  let { result, truth_table, expression } = location.state;
  console.log(result, truth_table);
  return (
    <div className=" grid grid-cols-6 grid-rows-1  h-full w-full items-center justify-items-center">
      <Flow_practice expression={expression} />
      <Truth_table outputs={result} inputs={truth_table} />
    </div>
  );
}

export default Practice;
