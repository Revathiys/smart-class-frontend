import AdminLayout from "../../components/layout/AdminLayout";

function AddClassroom() {
  return (
    <AdminLayout>
      <div style={styles.container}>
        
        {/* PAGE TITLE */}
        <h1 style={styles.title}>🏫 Add Classroom</h1>
        <p style={styles.subtitle}>Register a new classroom for timetable allocation.</p>

        {/* CARD */}
        <div style={styles.card}>
          <form style={styles.form}>

            {/* Classroom Name */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Classroom Name</label>
              <input type="text" placeholder="e.g., Room 101 / Lab 3" style={styles.input} />
            </div>

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

            {/* Capacity */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Seating Capacity</label>
              <input type="number" placeholder="e.g., 60" style={styles.input} />
            </div>

            {/* Button */}
            <button type="submit" style={styles.button}>
              Add Classroom
            </button>

          </form>
        </div>
      </div>
    </AdminLayout>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#666",
    marginBottom: "25px",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "600px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    fontSize: "15px",
    fontWeight: "600",
    color: "#333",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "12px",
    background: "#2ecc71",
    color: "white",
    border: "none",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default AddClassroom;

