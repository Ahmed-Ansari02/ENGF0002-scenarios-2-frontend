import React from "react";
import { Handle, Position } from "reactflow";

const StyleA = { top: 20 };
const StyleB = { top: 60 };
function Gate() {

  return (
    <>
      <div className="w-20 h-20 rounded bg-blue-500 hover:bg-blue-400 font-bold content-center flex items-center justify-center"> NAND gate </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} id="a" style={StyleA} />
      <Handle type="target" position={Position.Left} id="b" style={StyleB} />
    </>
  );
}

export default Gate;
