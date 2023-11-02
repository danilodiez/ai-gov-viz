import { GraphCanvas } from "reagraph";
import "./App.css";
import { nodes } from "./data/nodes.js";
import { edges } from "./data/edges.js";
import { v4 as uuidv4 } from "uuid";
import { Article } from "./article.js";

function App() {
  console.log({ nodes });
  console.log({ edges });
  const updatedEdges = edges.map((edge) => ({ ...edge, id: uuidv4() }));
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        height: "100vh",
      }}
    >
      <div
        style={{
          border: "2px solid red",
          maxHeight: "100vh",
          overflow: "scroll",
        }}
      >
        <Article />
      </div>
      <div style={{ position: "relative" }}>
        <GraphCanvas labelType="all" nodes={nodes} edges={updatedEdges} />
      </div>
    </div>
  );
}

export default App;
