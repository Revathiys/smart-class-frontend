import { Link } from "react-router-dom";

function TeacherAttendance() {
  // Sample attendance data
  const attendanceData = [
    { date: "2025-01-05", subject: "Python Programming", present: 45, absent: 5 },
    { date: "2025-01-05", subject: "DBMS", present: 42, absent: 8 },
    { date: "2025-01-05", subject: "Operating System", present: 47, absent: 3 },
  ];

  return (
    <div style={styles.layout}>

      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Teacher</h2>

        <Link to="/teacher" style={styles.link}>🏠 Dashboard</Link>
        <Link to="/teacher/attendance" style={styles.activeLink}>📊 Attendance</Link>
        <Link to="/teacher/timetable" style={styles.link}>📅 Timetable</Link>
        <Link to="/teacher/profile" style={styles.link}>👤 Profile</Link>

        <Link to="/" style={styles.logout}>🚪 Logout</Link>
      </div>

      {/* Main Content */}
      <div style={styles.content}>

        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>📊 Attendance Overview</h1>
          <p style={styles.subtitle}>Track class-wise attendance in real time.</p>
        </div>

        {/* Cards */}
        <div style={styles.cardRow}>
          <div style={styles.cardBlue}>
            <h3>Total Classes Today</h3>
            <p style={styles.cardNumber}>3</p>
          </div>

          <div style={styles.cardGreen}>
            <h3>Average Present</h3>
            <p style={styles.cardNumber}>45</p>
          </div>

          <div style={styles.cardRed}>
            <h3>Average Absent</h3>
            <p style={styles.cardNumber}>5</p>
          </div>
        </div>

        {/* Table Title */}
        <h2 style={styles.sectionTitle}>📘 Today's Attendance</h2>

        {/* Attendance List */}
        <div>
          {attendanceData.map((item, index) => {
            const total = item.present + item.absent;
            const presentPercent = (item.present / total) * 100;

            return (
              <div key={index} style={styles.attendanceCard}>
                <h3 style={styles.subject}>{item.subject}</h3>
                <p style={styles.date}>Date: {item.date}</p>

                {/* Present/Absent stats */}
                <div style={styles.statRow}>
                  <span style={styles.presentText}>Present: {item.present}</span>
                  <span style={styles.absentText}>Absent: {item.absent}</span>
                </div>

                {/* Progress Bar */}
                <div style={styles.progressBar}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${presentPercent}%`,
                    }}
                  ></div>
                </div>

                <p style={styles.percentText}>{Math.round(presentPercent)}% Present</p>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}

/* ------------------- STYLES ------------------- */

const styles = {
  layout: { display: "flex", height: "100vh" },

  sidebar: {
    width: "250px",
    background: "#2C3E50",
    padding: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  logo: { textAlign: "center", fontSize: "24px", marginBottom: "20px" },

  link: {
    padding: "12px",
    background: "#34495E",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  activeLink: {
    padding: "12px",
    background: "#1abc9c",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  logout: {
    marginTop: "auto",
    padding: "12px",
    background: "#e74c3c",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  content: {
    flex: 1,
    padding: "30px",
    background: "#ecf0f1",
    overflowY: "scroll",
  },

  header: {
    padding: "20px",
    background: "#8e44ad",
    color: "white",
    borderRadius: "10px",
    marginBottom: "30px",
  },

  title: { margin: 0, fontSize: "28px" },
  subtitle: { marginTop: "5px", opacity: 0.9 },

  /* Cards */
  cardRow: { display: "flex", gap: "20px", marginBottom: "30px" },

  cardBlue: {
    background: "#3498db",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    width: "250px",
    textAlign: "center",
  },
  cardGreen: {
    background: "#27ae60",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    width: "250px",
    textAlign: "center",
  },
  cardRed: {
    background: "#e74c3c",
    padding: "20px",
    borderRadius: "10px",
    color: "white",
    width: "250px",
    textAlign: "center",
  },

  cardNumber: { fontSize: "30px", fontWeight: "700" },

  sectionTitle: { fontSize: "22px", marginBottom: "15px" },

  /* Attendance Cards */
  attendanceCard: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  subject: { margin: 0, fontSize: "20px", fontWeight: "600" },
  date: { marginTop: "5px", color: "#7f8c8d" },

  statRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
  },

  presentText: { color: "#27ae60", fontWeight: "600" },
  absentText: { color: "#c0392b", fontWeight: "600" },

  progressBar: {
    height: "12px",
    background: "#bdc3c7",
    borderRadius: "6px",
    marginTop: "15px",
  },

  progressFill: {
    height: "12px",
    background: "#2ecc71",
    borderRadius: "6px",
  },

  percentText: {
    marginTop: "10px",
    fontWeight: "600",
    color: "#2c3e50",
  },
};

export default TeacherAttendance;
