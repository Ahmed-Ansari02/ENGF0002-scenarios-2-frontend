import React from "react";
import Flow_practice from "../components/Flow_practice";
import Truth_table from "../components/Truth_table";
import { useState } from "react";

function Practice({ data }) {
  return (
    <div className=" grid grid-cols-6 grid-rows-1  h-full w-full items-center justify-items-center">
      <Flow_practice expression="A B AND C OR"/>
      <Truth_table outputs={data.output} inputs={data.truth_table} />
    </div>
  );
}

export default Practice;
