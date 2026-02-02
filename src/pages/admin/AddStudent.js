import AdminLayout from "../../components/layout/AdminLayout";

function AddStudent() {
  return (
    <AdminLayout>
      <div style={styles.container}>

        {/* HEADER */}
        <h1 style={styles.title}>👨‍🎓 Add Student</h1>
        <p style={styles.subtitle}>
          Enter the student details to register them into the system.
        </p>

        {/* FORM CARD */}
        <div style={styles.card}>
          <form style={styles.form}>

            {/* Student Name */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter student name"
                style={styles.input}
              />
            </div>

            {/* Roll Number */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Roll Number</label>
              <input 
                type="text" 
                placeholder="e.g., BCA123"
                style={styles.input}
              />
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

            {/* Contact */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Contact Number</label>
              <input 
                type="number"
                placeholder="e.g., 9876543210"
                style={styles.input}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" style={styles.button}>
              Add Student
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
    fontWeight: "700",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#6f6f6f",
    marginBottom: "25px",
  },
  card: {
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    maxWidth: "650px",
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
    fontWeight: "600",
    marginBottom: "8px",
  },
  input: {
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "14px",
  },
  button: {
    padding: "12px",
    background: "#8e44ad",
    color: "white",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default AddStudent;
