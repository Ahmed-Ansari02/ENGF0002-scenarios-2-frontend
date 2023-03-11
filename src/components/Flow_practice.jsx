import { useState, useCallback, memo } from "react";
import ReactFlow, {
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Panel,
  Position,
} from "reactflow";
import "reactflow/dist/style.css";
import And_gate from "./And_gate";
import Or_gate from "./Or_gate";
import Nand_gate from "./Nand_gate";
import Not_gate from "./Not_gate";
import Input_box from "./Input_box";
import Panel_button from "./Panel_button";
import Bigger_panel_button from "./Bigger_panel_button";
import { toast } from "react-toastify";
const nodeTypes = {
  and: And_gate,
  or: Or_gate,
  nand: Nand_gate,
  not: Not_gate,
  in: Input_box,
};

const edgeOptions = {
  animated: true,
  style: {
    stroke: "white",
  },
};
const initialNodes = [
  {
    id: "A",
    position: { x: 100, y: 200 },
    data: { label: "A" },
    type: "in",
  },
  {
    id: "B",
    position: { x: 100, y: 400 },
    data: { label: "B" },
    type: "in",
  },
  {
    id: "C",
    position: { x: 100, y: 600 },
    data: { label: "C" },
    type: "in",
  },
];

const initialEdges = [
  { id: "1", source: "A", target: "and_1", targetHandle: "a" },
];

function Flow_practice({ expression }) {
  expression = expression.split(" ");
  let nodes_temp = [];
  let edges_temp = [];
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  for (let i = 0; i < expression.length; i++) {}

  function create_links() {
    let associations = {};
    for (let i = 0; i < edges.length; i++) {
      if (associations[edges[i].target] === undefined) {
        associations[edges[i].target] = [edges[i].source];
      } else {
        associations[edges[i].target].push(edges[i].source);
      }
    }
    return associations;
  }
  function parse_gate(str) {
    if (str.includes("NAND")) {
      return "NAND";
    } else if (str.includes("OR")) {
      return "OR";
    } else if (str.includes("AND")) {
      return "AND";
    } else if (str.includes("NOT")) {
      return "NOT";
    } else {
      return null;
    }
  }
  async function upload() {
    let associations = create_links();
    let expression = "";
    for (let key in associations) {
      let inputs = associations[key];
      for (let input of inputs) {
        if (parse_gate(input) !== null) {
          continue;
        }
        expression += input;
        expression += " ";
      }
      expression += parse_gate(key);
      expression += " ";
    }
    console.log(expression);
    let response = await fetch("http://127.0.0.1:5000/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ expression: expression, inputs: 3 }),
    });
    let data = await response.json();
    if (data.status === "failed") {
      toast.error(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    } else {
      toast.success(data.message, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );
  const onEdgesChange = useCallback(
    (changes) =>
      setEdges((eds) => {
        applyEdgeChanges(changes, eds);
      }),
    []
  );

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );
  return (
    <div className=" h-full w-full col-span-4 px-4 py-5 box-border">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        defaultEdgeOptions={edgeOptions}
        onConnect={onConnect}
        nodeTypes={nodeTypes}>
        <Background />
        <Panel className="bg-white rounded flex-col w-fit justify-center ">
          <Panel_button
            updater={() =>
              setNodes((nodes) => [
                ...nodes,
                {
                  id: "AND" + String(nodes.length - 2),
                  position: { x: 400, y: 400 },
                  data: { label: "AND" },
                  type: "and_gate",
                },
              ])
            }
            value="AND"
          />
          <Panel_button
            updater={() =>
              setNodes((nodes) => [
                ...nodes,
                {
                  id: "OR" + String(nodes.length - 2),
                  position: { x: 400, y: 400 },
                  data: { label: "OR" },
                  type: "or_gate",
                },
              ])
            }
            value="OR"
          />

          <Panel_button
            updater={() =>
              setNodes((nodes) => [
                ...nodes,
                {
                  id: "NAND" + String(nodes.length - 2),
                  position: { x: 400, y: 400 },
                  data: { label: "NAND" },
                  type: "nand_gate",
                },
              ])
            }
            value="NAND"
          />
          <Panel_button
            updater={() =>
              setNodes((nodes) => [
                ...nodes,
                {
                  id: "NOT" + String(nodes.length - 2),
                  position: { x: 400, y: 400 },
                  data: { label: "NOT" },
                  type: "not_gate",
                },
              ])
            }
            value="NOT"
          />
        </Panel>

        <Controls />
      </ReactFlow>
    </div>
  );
}

export default memo(Flow_practice);
