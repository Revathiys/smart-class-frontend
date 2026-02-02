import { useState } from "react";
import AdminLayout from "../../components/layout/AdminLayout";

function GenerateTimetable() {
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = (e) => {
    e.preventDefault();
    setLoading(true);
    setGenerated(false);

    // Fake loading time
    setTimeout(() => {
      setLoading(false);
      setGenerated(true);
    }, 2000);
  };

  return (
    <AdminLayout>
      <div style={styles.container}>

        {/* PAGE TITLE */}
        <h1 style={styles.title}>🗓️ Generate Timetable</h1>
        <p style={styles.subtitle}>
          Select department, year, and settings to generate the timetable automatically.
        </p>

        {/* FORM CARD */}
        <div style={styles.card}>
          <form style={styles.form} onSubmit={handleGenerate}>

            {/* Department */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Department</label>
              <select style={styles.input}>
                <option value="">Select Department</option>
                <option value="CS">Computer Science</option>
                <option value="IT">Information Technology</option>
                <option value="EC">Electronics</option>
                <option value="Maths">Mathematics</option>
              </select>
            </div>

            {/* Year */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Year</label>
              <select style={styles.input}>
                <option value="">Select Year</option>
                <option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
              </select>
            </div>

            {/* Periods per day */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Number of Periods per Day</label>
              <input 
                type="number" 
                placeholder="e.g., 6"
                style={styles.input}
              />
            </div>

            {/* Working Days */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Working Days (per week)</label>
              <select style={styles.input}>
                <option value="">Select Days</option>
                <option value="5">5 Days (Mon–Fri)</option>
                <option value="6">6 Days (Mon–Sat)</option>
              </select>
            </div>

            {/* Generate Button */}
            <button type="submit" style={styles.button}>
              Generate Timetable
            </button>

          </form>
        </div>

        {/* LOADING ANIMATION */}
        {loading && (
          <div style={styles.loadingBox}>
            <div style={styles.loader}></div>
            <p style={styles.loadingText}>Generating timetable... Please wait</p>
          </div>
        )}

        {/* SUCCESS MESSAGE */}
        {generated && !loading && (
          <div style={styles.successBox}>
            🎉 Timetable generated successfully!
          </div>
        )}

      </div>
    </AdminLayout>
  );
}

const styles = {
  container: { padding: "20px" },
  title: { fontSize: "28px", fontWeight: "700", marginBottom: "5px" },
  subtitle: { color: "#666", marginBottom: "25px" },

  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "650px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },

  form: { display: "flex", flexDirection: "column", gap: "20px" },
  formGroup: { display: "flex", flexDirection: "column" },
  label: { fontWeight: "600", marginBottom: "8px" },

  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
  },

  button: {
    padding: "12px",
    background: "#e67e22",
    color: "white",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },

  loadingBox: {
    marginTop: "25px",
    padding: "20px",
    background: "#fff3cd",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
  },

  loader: {
    width: "18px",
    height: "18px",
    border: "3px solid #f39c12",
    borderTop: "3px solid transparent",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },

  loadingText: { fontSize: "16px", color: "#856404" },

  successBox: {
    marginTop: "25px",
    padding: "15px",
    background: "#d4edda",
    color: "#155724",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "600",
  },
};

export default GenerateTimetable;
