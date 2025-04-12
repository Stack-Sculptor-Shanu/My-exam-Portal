import React from "react";
import "./FlowChart.css";

const FlowChart = () => {
  return (
    <div className="flowchart">
      {/* Box 1 */}
      <div className="box" id="box1">
        Step 1
      </div>

      {/* Arrow */}
      <svg width="50" height="50" viewBox="0 0 50 50" className="arrow">
        <line
          x1="0"
          y1="25"
          x2="50"
          y2="25"
          stroke="black"
          strokeWidth="2"
        />
        <polygon
          points="45,20 50,25 45,30"
          fill="black"
        />
      </svg>

      {/* Box 2 */}
      <div className="box" id="box2">
        Step 2
      </div>

      {/* Arrow */}
      <svg width="50" height="50" viewBox="0 0 50 50" className="arrow">
        <line
          x1="0"
          y1="25"
          x2="50"
          y2="25"
          stroke="black"
          strokeWidth="2"
        />
        <polygon
          points="45,20 50,25 45,30"
          fill="black"
        />
      </svg>

      {/* Box 3 */}
      <div className="box" id="box3">
        Step 3
      </div>
    </div>
  );
};

export default FlowChart;
