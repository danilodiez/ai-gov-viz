import { useCallback, useRef, useState } from "react";
import { GraphCanvas, GraphCanvasRef, useSelection } from "reagraph";
import "./App.css";
import { nodes } from "./data/nodes.js";
import { edges } from "./data/edges.js";
import { Article } from "./article.js";

function App() {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const [highlightedText, setHighlightedText] = useState({});
  const { selections, onNodeClick, onCanvasClick } = useSelection({
    ref: graphRef,
    nodes: nodes,
    edges: edges,
    focusOnSelect: false,
  });
  const handleEdgeSelection = useCallback((edge) => {
    if (edge.start_phrase !== "") {
      setHighlightedText({
        start: edge.start_phrase,
        end: edge.end_phrase,
      });
    }
  }, []);
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
        <Article highlightedText={highlightedText} />
      </div>
      <div style={{ position: "relative" }}>
        <GraphCanvas
          labelType="all"
          ref={graphRef}
          selections={selections}
          onNodeClick={onNodeClick}
          onCanvasClick={onCanvasClick}
          nodes={nodes}
          edges={edges}
          onEdgeClick={handleEdgeSelection}
        />
      </div>
    </div>
  );
}

export default App;
