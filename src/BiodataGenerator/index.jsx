import React from "react";
import { useState } from "react";
import "./style.css";

export default function BiodataGenerator() {
  // All the data for the placeholders and handling of the data mapped to the placeholders for the previous appointments

  const FIELD_LABELS = ["Sr", "Unit", "Appointment", "From", "To"];
  const [rows, setRows] = useState([
    { sr: "", unit: "", appointment: "", from: "", to: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updatedRows = [...rows];
    updatedRows[index][field] = value;
    setRows(updatedRows);
  };

  const addRow = () => {
    const newRow = {};
    FIELD_LABELS.forEach((label) => (newRow[label] = ""));
    setRows([...rows, newRow]);
  };

  const removeRow = (index) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  //Handling data same as above for family particulars

  const FAMILY_LABELS = [
    "Sr",
    "Name",
    "Relation",
    "Educational",
    "Qualification",
    "Occupation",
  ];

  const [family, setFamily] = useState([
    {
      Sr: "",
      Name: "",
      Relation: "",
      Educational: "",
      Qualification: "",
      Occupation: "",
    },
  ]);

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

        {/* //added the table to add details of the appointments */}

        <h2>4. Previous Appointments.</h2>
        <div style={{ padding: "20px" }}>
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
                {FIELD_LABELS.map((label, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={label}
                    value={row[label]}
                    onChange={(e) =>
                      handleChange(rowIndex, label, e.target.value)
                    }
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
                  Remove Appointment
                </button>
              </div>
            ))}
            <button type="button" onClick={addRow}>
              Add appointment
            </button>
          </form>
        </div>

        <h2>5. Courses</h2>
        <input type="text" placeholder="Enter your course" />

        <h2>6. Hobbies</h2>
        <input type="text" placeholder="tell us about ur hobbies" />

        <h2>7. Sports</h2>
        <input type="text" placeholder="sports that u like" />

        <h2>8. Family Particulars.</h2>
        {/* Adding another table for the family details */}
      </form>
    </div>
  );
}
