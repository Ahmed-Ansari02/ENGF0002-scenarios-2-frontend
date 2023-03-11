import React from "react";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";

function Gate() {
  return (
    <>
      <div className="w-20 h-20 rounded bg-blue-500 hover:bg-blue-400 font-bold content-center flex items-center justify-center">
        {" "}
        NOT gate{" "}
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} id="a" />
    </>
  );
}

export default Gate;
