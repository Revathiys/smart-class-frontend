import { Link } from "react-router-dom";

function StudentProfile() {
  // Demo student data (later connect backend)
  const student = {
    name: "Riya Sharma",
    usn: "U24AN23S0216",
    department: "Computer Science",
    year: "2nd Year",
    email: "riya@student.com",
    phone: "+91 98765 43210",
  };

  return (
    <div style={styles.layout}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Student</h2>

        <Link to="/student" style={styles.link}>🏠 Dashboard</Link>
        <Link to="/student/profile" style={styles.link}>👤 Profile</Link>
        <Link to="/student/timetable" style={styles.link}>📅 Timetable</Link>
        <Link to="/student/attendance" style={styles.link}>📝 Attendance</Link>
        <Link to="/student/assignments" style={styles.link}>📘 Assignments</Link>

        <Link to="/" style={styles.logout}>🚪 Logout</Link>
      </div>

      {/* MAIN CONTENT */}
      <div style={styles.content}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1 style={styles.title}>My Profile 👤</h1>
          <p style={styles.subtitle}>View your personal information</p>
        </div>

        {/* PROFILE CARD */}
        <div style={styles.card}>
          <div style={styles.avatar}>🎓</div>

          <h2 style={styles.name}>{student.name}</h2>
          <p style={styles.usn}>{student.usn}</p>

          <div style={styles.infoGrid}>
            <p><strong>Department:</strong> {student.department}</p>
            <p><strong>Year:</strong> {student.year}</p>
            <p><strong>Email:</strong> {student.email}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
          </div>

          <button style={styles.editBtn}>✏️ Edit Profile</button>
        </div>

      </div>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",
    height: "100vh",
  },

  // SIDEBAR
  sidebar: {
    width: "250px",
    background: "#1e272e",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  logo: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "20px",
  },
  link: {
    padding: "12px",
    background: "#485460",
    textDecoration: "none",
    color: "white",
    borderRadius: "6px",
  },
  logout: {
    marginTop: "auto",
    padding: "12px",
    background: "#ff3f34",
    textDecoration: "none",
    color: "white",
    borderRadius: "6px",
  },

  // CONTENT
  content: {
    flex: 1,
    padding: "30px",
    background: "#f1f2f6",
  },

  // HEADER
  header: {
    background: "#0fbcf9",
    color: "white",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  title: {
    margin: 0,
    fontSize: "28px",
  },
  subtitle: {
    marginTop: "8px",
    opacity: 0.9,
  },

  // PROFILE CARD
  card: {
    background: "white",
    maxWidth: "500px",
    margin: "0 auto",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
  },
  avatar: {
    fontSize: "60px",
    marginBottom: "10px",
  },
  name: {
    margin: "10px 0 5px",
  },
  usn: {
    color: "#7f8c8d",
    marginBottom: "20px",
  },
  infoGrid: {
    textAlign: "left",
    marginBottom: "20px",
    lineHeight: "1.8",
  },
  editBtn: {
    padding: "10px 20px",
    background: "#0fbcf9",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "15px",
  },
};

export default StudentProfile;
