import React from "react";
import { Handle, Position } from "reactflow";

function Input_box_jsx({data}) {
  return (
    <>
      <div className=" w-20 h-20 rounded bg-green-300 font-bold hover:bg-green-500 flex items-center justify-center" >
        {" "}
        {data.label}
      </div>
      <Handle type="source" position={Position.Right} id="in" />
    </>
  );
}

export default Input_box_jsx;
