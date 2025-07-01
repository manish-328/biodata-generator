import React from "react";
import { useState } from "react";
import "./style.css";

export default function BiodataGenerator() {
  // All the data for the placeholders and handling of the data mapped to the placeholders for the previous appointments
  const [image, setImage] = useState(null);

  //handling the rows for appointment
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
    "Educational Qualification",
    "Occupation",
  ];

  const [family, setFamily] = useState([
    {
      Sr: "",
      Name: "",
      Relation: "",
      Qualification: "",
      Occupation: "",
    },
  ]);

  const handleFamilyChange = (index, field, value) => {
    const updatedFamilyRows = [...family];
    updatedFamilyRows[index][field] = value;
    setFamily(updatedFamilyRows);
  };

  const addFamilyRow = () => {
    const newFamilyRow = {};
    FAMILY_LABELS.forEach((label) => (newFamilyRow[label] = ""));
    setFamily([...family, newFamilyRow]);
  };

  const removeFamilyRow = (index) => {
    const updatedFamilyRows = [...family];
    updatedFamilyRows.splice(index, 1);
    setFamily(updatedFamilyRows);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Generate a temporary URL to preview the image
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
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
                    onChange={(e) => handleChange(index, label, e.target.value)}
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

        <div style={{ padding: "20px" }}>
          <form>
            {family.map((familyrow, index) => (
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
                {FAMILY_LABELS.map((label, i) => (
                  <input
                    key={i}
                    type="text"
                    placeholder={label}
                    value={familyrow[label]}
                    onChange={(e) =>
                      handleFamilyChange(index, label, e.target.value)
                    }
                  />
                ))}
                <button
                  type="button"
                  onClick={() => removeFamilyRow(index)}
                  disabled={family.length === 1}
                  style={{
                    gridColumn: "span 5",
                    marginTop: "5px",
                    color: "red",
                  }}
                >
                  Remove Member
                </button>
              </div>
            ))}
            <button type="button" onClick={addFamilyRow}>
              Add Member
            </button>
          </form>
        </div>

        <h2>9.</h2>
        <textarea
          type="text"
          placeholder="Add a brief note about you: 
          For eg (I hail from #city,#state and completed
          my schooling from #School, #School address. After completing my school
          education, I pursued #Higher Education from #College name . Following
          my graduation, I worked for #work experience as a #Designation at
          #Firm Name. I joined #AcademyName on #Date of joining and
          was part of the #Extra-curricular activities)"
          rows={1}
          style={{
            width: "100%",
            resize: "none",
            overflow: "hidden",
            fontSize: "16px",
          }}
          onInput={(e) => {
            e.target.style.height = "auto";
            e.target.style.height = `${e.target.scrollHeight}px`;
          }}
        ></textarea>

        {/* upload image div */}

        <div style={{ marginTop: "20px" }}>
          <label>Upload your photo:</label>
          <br />
          <input type="file" accept="image/*" onChange={handleImageChange} />

          {image && (
            <div style={{ marginTop: "15px" }}>
              <img
                src={image}
                alt="Uploaded Preview"
                style={{ width: "200px", height: "auto", borderRadius: "8px" }}
              />
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
