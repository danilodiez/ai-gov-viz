import { GraphCanvas } from "reagraph";
import "./App.css";
import { nodes } from "./data/nodes.js";
import { edges } from "./data/edges.js";
import { Article } from "./article.js";

function App() {
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
        <GraphCanvas labelType="all" nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}

export default App;
