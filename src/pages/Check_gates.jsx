import Flow from "../components/Flow";
import Truth_table from "../components/Truth_table";
import { useState } from "react";

function Check_gate() {
  const [data, setData] = useState(false);
  return (
    <div className=" grid grid-cols-6  h-full w-full items-center justify-items-center">
      <Flow setData={setData} full={data ? false : true} />
      <Truth_table outputs={data.output} inputs={data.truth_table} />
    </div>
  );
}

export default Check_gate;
