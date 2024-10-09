const tableHeaderStyle: React.CSSProperties = {
  fontSize: "12px",
  padding: "7px",
  fontWeight: "bold",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle: React.CSSProperties = {
  fontSize: "12px",
  padding: "7px",
  borderBottom: "1px solid #ddd",
  color: "#333",
};

export default function Table() {
  return (
    <div className="h-[14vh] overflow-y-auto mt-8 text-left">
      <table className="w-[94%]">
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
          <tr>
            <td style={tableCellStyle}>Row 2, Col 1</td>
            <td style={tableCellStyle}>Row 2, Col 2</td>
            <td style={tableCellStyle}>Row 2, Col 3</td>
            <td style={tableCellStyle}>Row 2, Col 4</td>
            <td style={tableCellStyle}>Row 2, Col 5</td>
            <td style={tableCellStyle}>Row 2, Col 6</td>
            <td style={tableCellStyle}>Row 2, Col 7</td>
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
          <tr>
            <td style={tableCellStyle}>Row 2, Col 1</td>
            <td style={tableCellStyle}>Row 2, Col 2</td>
            <td style={tableCellStyle}>Row 2, Col 3</td>
            <td style={tableCellStyle}>Row 2, Col 4</td>
            <td style={tableCellStyle}>Row 2, Col 5</td>
            <td style={tableCellStyle}>Row 2, Col 6</td>
            <td style={tableCellStyle}>Row 2, Col 7</td>
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
          <tr>
            <td style={tableCellStyle}>Row 2, Col 1</td>
            <td style={tableCellStyle}>Row 2, Col 2</td>
            <td style={tableCellStyle}>Row 2, Col 3</td>
            <td style={tableCellStyle}>Row 2, Col 4</td>
            <td style={tableCellStyle}>Row 2, Col 5</td>
            <td style={tableCellStyle}>Row 2, Col 6</td>
            <td style={tableCellStyle}>Row 2, Col 7</td>
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
    </div>
  );
}
