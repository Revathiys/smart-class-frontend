import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div style={styles.container}>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Admin</h2>

        <Link to="/admin" style={styles.link}>Dashboard</Link>
        <Link to="/admin/add-teacher" style={styles.link}>Add Teacher</Link>
        <Link to="/admin/add-classroom" style={styles.link}>Add Classroom</Link>
        <Link to="/admin/add-student" style={styles.link}>Add Student</Link>
        <Link to="/admin/generate-timetable" style={styles.link}>Generate Timetable</Link>
        <Link to="/admin/view-timetable" style={styles.link}>View Timetable</Link>

        <Link to="/" style={styles.logout}>Logout</Link>
      </div>

      {/* Page Content */}
      <div style={styles.content}>
        {children}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
  },
  sidebar: {
    width: "230px",
    height: "100vh",
    background: "#2c3e50",
    padding: "20px",
    color: "white",
    position: "fixed",
    top: 0,
    left: 0,
  },
  logo: {
    marginBottom: "25px",
    fontSize: "24px",
  },
  link: {
    display: "block",
    color: "white",
    textDecoration: "none",
    marginBottom: "15px",
    fontSize: "16px",
  },
  logout: {
    position: "absolute",
    bottom: "30px",
    color: "#e74c3c",
    textDecoration: "none",
    fontSize: "16px",
  },
  content: {
    marginLeft: "250px",
    padding: "25px",
    width: "100%",
    minHeight: "100vh",
    background: "#f4f6f7",
  },
};

export default AdminLayout;
