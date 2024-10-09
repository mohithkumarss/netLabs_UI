// components/VerticalTimeline.tsx
import React from "react";

interface TimelineStage {
  title: string;
  description: string;
  status: "completed" | "pending" | "current";
}

interface VerticalTimelineProps {
  stages: TimelineStage[];
}

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ stages }) => {
  return (
    <div className="flex flex-col items-start relative ml-5">
      {stages.map((stage, index) => (
        <div key={index} className="relative mb-8 flex items-start">
          {/* Vertical line connecting the circles */}
          {index !== stages.length - 1 && (
            <div className="absolute left-3 top-6 w-[2px] h-full bg-gray-300"></div>
          )}

          {/* Circle indicating the stage */}
          <div
            className={`w-6 h-6 flex items-center justify-center rounded-full ${
              stage.status === "completed"
                ? "bg-blue-700 text-white" // Red for completed stages
                : stage.status === "current"
                ? "bg-blue-700 text-white animate-pulse" // Pulse animation for current stage
                : "bg-gray-300 text-gray-500"
            } font-bold text-[10px] relative z-10`}
          >
            {index + 1}
          </div>

          {/* Text content for each stage */}
          <div className="ml-6">
            <h3
              className={`font-semibold text-sm ${
                stage.status !== "pending" ? "text-black" : "text-gray-500"
              }`}
            >
              {stage.title}
            </h3>
            <p className="text-gray-500 text-xs">{stage.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
