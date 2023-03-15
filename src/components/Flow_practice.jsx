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

function Flow_practice({ expression }) {
  expression = expression.split(" ").slice(0, -1);
  let nodes_list = [];
  let edges_list = [];
  let stack = [];
  for (let i = 0; i < expression.length; i++) {
    if (parse_gate(expression[i]) === null) {
      stack.push(expression[i]);
    } else {
      let gate = parse_gate(expression[i]);
      let target = gate + "_" + i.toString();
      nodes_list.push({
        id: target,
        position: {
          x: 300 + 200 * (nodes_list.length % 3),
          y: 300 + 200 * (nodes_list.length % 2),
        },
        data: { label: gate },
        type: gate,
      });
      if (gate === "not") {
        let src1 = stack.pop();
        edges_list.push({
          id: i,
          source: src1,
          target: target,
        });
        stack.push(target);
      } else {
        let src1 = stack.pop();
        let src2 = stack.pop();

        edges_list.push({
          id: gate + "_" + i.toString() + src1,
          source: src2,
          target: target,
          targetHandle: "a",
        });
        edges_list.push({
          id: gate + "_" + i.toString() + src2,
          source: src1,
          target: target,
          targetHandle: "b",
        });
        stack.push(target);
      }
    }
  }

  const [nodes, setNodes] = useState([...initialNodes, ...nodes_list]);
  const [edges, setEdges] = useState([...edges_list]);

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
      return "nand";
    } else if (str.includes("OR")) {
      return "or";
    } else if (str.includes("AND")) {
      return "and";
    } else if (str.includes("NOT")) {
      return "not";
    } else {
      return null;
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
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default memo(Flow_practice);
