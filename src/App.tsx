import { useCallback, useRef, useState } from "react";
import { GraphCanvas, GraphCanvasRef, useSelection } from "reagraph";
import "./App.css";
import { newNodes } from "./data/new-nodes.ts";
import { newEdges } from "./data/new-edges.ts";
import { Article } from "./article.tsx";
import { Edge } from "./data/new-edges.ts";

function App() {
  const graphRef = useRef<GraphCanvasRef | null>(null);
  const [highlightedText, setHighlightedText] = useState({
    start: "",
    end: "",
  });
  const { selections, onNodeClick, onCanvasClick } = useSelection({
    ref: graphRef,
    nodes: newNodes,
    edges: newEdges,
    pathSelectionType: "in",
  });
  const handleEdgeSelection = useCallback((edge: Edge) => {
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
          nodes={newNodes}
          edges={newEdges}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onEdgeClick={(edge: any) => handleEdgeSelection(edge)}
        />
      </div>
    </div>
  );
}

export default App;
