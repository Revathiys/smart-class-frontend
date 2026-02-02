import AdminLayout from "../../components/layout/AdminLayout";

function AddTeacher() {
  return (
    <AdminLayout>
      <div style={styles.container}>
        
        {/* Page Title */}
        <h1 style={styles.title}>➕ Add New Teacher</h1>
        <p style={styles.subtitle}>
          Fill the details below to register a new teacher into the system.
        </p>

        {/* Form Card */}
        <div style={styles.card}>

          <form style={styles.form}>
            
            {/* Name */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Teacher Name</label>
              <input type="text" placeholder="Enter teacher name" style={styles.input} />
            </div>

            {/* Email */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Email</label>
              <input type="email" placeholder="teacher@gmail.com" style={styles.input} />
            </div>

            {/* Department */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Department</label>
              <input type="text" placeholder="CS / IT / Maths..." style={styles.input} />
            </div>

            {/* Subject */}
            <div style={styles.formGroup}>
              <label style={styles.label}>Subject</label>
              <input type="text" placeholder="Python, OS, DBMS..." style={styles.input} />
            </div>

            {/* Submit Button */}
            <button type="submit" style={styles.button}>Add Teacher</button>

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
    color: "#555",
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
    background: "#3498db",
    color: "white",
    border: "none",
    fontSize: "16px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  }
};

export default AddTeacher;

