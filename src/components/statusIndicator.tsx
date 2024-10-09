import React from "react";

interface StatusIndicatorProps {
  status: "active" | "inactive";
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({ status }) => {
  const isActive = status === "active";

  return (
    <div className="flex items-center space-x-2 mx-12 ">
      <div
        className={`h-3 w-3 rounded-full ${
          isActive ? "bg-green-500" : "bg-red-500"
        }`}
      ></div>
      <span className="text-xs font-bold text-gray-600">
        {isActive ? "Active" : "Inactive"}
      </span>
    </div>
  );
};

// Usage example:
// <StatusIndicator status="active" />
// <StatusIndicator status="inactive" />
