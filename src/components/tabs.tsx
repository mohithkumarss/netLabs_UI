"use client";
import React, { useState } from "react";

const tableHeaderStyle: React.CSSProperties = {
  padding: "10px",
  fontWeight: "bold",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle: React.CSSProperties = {
  padding: "8px",
  borderBottom: "1px solid #ddd",
  color: "#333",
};

const tabData = [
  {
    label: "Tab 1",
    content: (
      <table
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Column 1</th>
            <th style={tableHeaderStyle}>Column 2</th>
            <th style={tableHeaderStyle}>Column 3</th>
            <th style={tableHeaderStyle}>Column 4</th>
            <th style={tableHeaderStyle}>Column 5</th>
            <th style={tableHeaderStyle}>Column 6</th>
            <th style={tableHeaderStyle}>Column 7</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={tableCellStyle}>Row 1, Col 1</td>
            <td style={tableCellStyle}>Row 1, Col 2</td>
            <td style={tableCellStyle}>Row 1, Col 3</td>
            <td style={tableCellStyle}>Row 1, Col 4</td>
            <td style={tableCellStyle}>Row 1, Col 5</td>
            <td style={tableCellStyle}>Row 1, Col 6</td>
            <td style={tableCellStyle}>Row 1, Col 7</td>
          </tr>
          <tr>
            <td style={tableCellStyle}>Row 2, Col 1</td>
            <td style={tableCellStyle}>Row 2, Col 2</td>
            <td style={tableCellStyle}>Row 2, Col 3</td>
            <td style={tableCellStyle}>Row 2, Col 4</td>
            <td style={tableCellStyle}>Row 2, Col 5</td>
            <td style={tableCellStyle}>Row 2, Col 6</td>
            <td style={tableCellStyle}>Row 2, Col 7</td>
          </tr>
          {/* Add more rows if needed */}
        </tbody>
      </table>
    ),
  },
  { label: "Tab 2", content: "Content for Tab 2" },
  { label: "Tab 3", content: "Content for Tab 3" },
  { label: "Tab 4", content: "Content for Tab 4" },
  { label: "Tab 5", content: "Content for Tab 5" },
  { label: "Tab 6", content: "Content for Tab 6" },
  { label: "Tab 7", content: "Content for Tab 7" },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative mt-16">
      {/* Tab Buttons with Smooth Effect */}
      <div className="flex space-x-4 ">
        {tabData.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-8 text-xs transition-all duration-300 ease-in-out transform rounded-md ${
              activeTab === index
                ? "text-white bg-blue-700" // Active tab
                : "text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="mt-2 p-4 bg-gray-100 rounded text-xs">
        {tabData[activeTab].content}
      </div>
    </div>
  );
};

export default Tabs;
