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
const nodeTypes = {
  and_gate: And_gate,
  or_gate: Or_gate,
  nand_gate: Nand_gate,
  not_gate: Not_gate,
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

const initialEdges = [];

function Flow({ setData, full }) {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
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
  async function calculate() {
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
    let response = await fetch("http://127.0.0.1:5000/calculate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ expression: expression, inputs: 3 }),
    });
    let data = await response.json();
    setData(data);
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
    <div
      className={
        full
          ? " h-full w-full col-span-5 px-4 py-5 box-border"
          : " h-full w-full  col-span-4 px-4 py-5 box-border"
      }>
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
        <Panel position={Position.Right}>
          <Bigger_panel_button value="Calculate" updater={calculate} />
        </Panel>
        <Panel position="bottom-right">
          <Bigger_panel_button
            value="Clear"
            updater={() => {
              setNodes(initialNodes);
              setEdges(initialEdges);
            }}
          />
        </Panel>
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default memo(Flow);
