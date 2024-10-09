"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { ScatterData, Layout } from "plotly.js"; // Import types from plotly.js

// Dynamically import react-plotly.js without SSR
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });

const PlotlyChart: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Define the data with the correct type using ScatterData
  const data: Partial<ScatterData>[] = [
    {
      x: [1, 2, 3, 4, 5],
      y: [10, 20, 30, 20, 10],
      type: "scatter", // Explicit type
      mode: "lines+markers",
      name: "Data 1",
      line: {
        color: "black", // Change line color
        width: 1, // Change line width
        dash: "solid", // Line style: solid, dash, dot, etc.
      },
    },
    {
      x: [1, 2, 3, 4, 5],
      y: [5, 15, 25, 35, 45],
      type: "scatter", // Explicit type
      mode: "lines+markers",
      name: "Data 2",
      line: {
        color: "blue", // Change line color
        width: 1, // Change line width
        dash: "solid", // Line style: solid, dash, dot, etc.
      },
    },
  ];

  // Define the layout with proper types
  const layout: Partial<Layout> = {
    title: "",
    xaxis: {
      title: "X-axis Label",
    },
    yaxis: {
      title: "Y-axis Label",
    },
  };

  if (!isClient) {
    // Prevent rendering on the server
    return null;
  }

  return (
    <div className="border w-fit border-zinc-300 rounded-lg mt-6">
      <Plot
        className="w-[33vw] h-[30vh]"
        data={data}
        layout={layout}
        config={{
          responsive: false,
          displayModeBar: false, // Disable configuration buttons
        }}
      />
    </div>
  );
};

export default PlotlyChart;
