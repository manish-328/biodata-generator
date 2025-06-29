import React from "react";
import { useState } from "react";
import "./style.css";

export default function BiodataGenerator() {
  const [rows, setRows] = useState([
    { field1: "", field2: "", field3: "", field4: "", field5: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    setRows([
      ...rows,
      { field1: "", field2: "", field3: "", field4: "", field5: "" },
    ]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <div className="container">
      <form className="form">
        <h2>1.Personal details</h2>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Rank" />
        <input type="text" placeholder="Personal Number" />
        <input type="text" placeholder="Date of birth" />
        <h2>2.Service Particulars.</h2>
        <input type="text" placeholder="Date of comission" />
        <input type="text" placeholder="Seniority in present rank" />
        <input type="text" placeholder="Decorations/commendations" />
        <input type="text" placeholder="Medical category" />
        <input type="text" placeholder="Entry" />
        <h2>3.Education Qualifications</h2>
        <input type="text" placeholder="Enter your educational qualification" />

        <div style={{ padding: "20px" }}>
          <h2>4. Previous Appointments.</h2>
          <form>
            {rows.map((row, index) => (
              <div
                key={index}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(5, 1fr)",
                  gap: "10px",
                  marginBottom: "10px",
                  alignItems: "center",
                }}
              >
                {Object.keys(row).map((field, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={`Field ${i + 1}`}
                    value={row[field]}
                    onChange={(e) => handleChange(index, field, e.target.value)}
                  />
                ))}
                <button
                  type="button"
                  onClick={() => removeRow(index)}
                  disabled={rows.length === 1}
                  style={{
                    gridColumn: "span 5",
                    marginTop: "5px",
                    color: "red",
                  }}
                >
                  Delete Row
                </button>
              </div>
            ))}
            <button type="button" onClick={addRow}>
              Add Row
            </button>
          </form>
        </div>
      </form>
    </div>
  );
}
