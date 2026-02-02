import { Link } from "react-router-dom";

function StudentDashboard() {

  const todayClasses = [
    { subject: "Python", time: "9:00 - 10:00", room: "202" },
    { subject: "DBMS", time: "11:00 - 12:00", room: "305" },
    { subject: "OS", time: "2:00 - 3:00", room: "101" },
  ];

  return (
    <div style={styles.layout}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Student</h2>

        <Link to="/student" style={styles.link}>🏠 Dashboard</Link>
        <Link to="/student/timetable" style={styles.link}>📅 Timetable</Link>
        <Link to="/student/attendance" style={styles.link}>📝 Attendance</Link>
        <Link to="/student/assignments" style={styles.link}>📘 Assignments</Link>
        <Link to="/student/notification" style={styles.link}>🔔 Notifications</Link>
        <Link to="/student/profile" style={styles.link}>👤 Profile</Link>

        <Link to="/" style={styles.logout}>🚪 Logout</Link>
      </div>

      {/* CONTENT */}
      <div style={styles.content}>

        {/* HEADER */}
        <div style={styles.header}>
          <h1>Welcome, Student 👋</h1>
          <p>Here’s what’s happening today</p>
        </div>

        {/* STATS */}
        <div style={styles.stats}>
          <div style={styles.card}>
            <h3>📊 Attendance</h3>
            <p>85%</p>
          </div>
          <div style={styles.card}>
            <h3>📘 Assignments</h3>
            <p>2 Pending</p>
          </div>
          <div style={styles.card}>
            <h3>🔔 Notifications</h3>
            <p>3 New</p>
          </div>
        </div>

        {/* TODAY CLASSES */}
        <h2 style={styles.sectionTitle}>Today's Classes</h2>

        <div style={styles.classes}>
          {todayClasses.map((c, i) => (
            <div key={i} style={styles.classCard}>
              <h3>{c.subject}</h3>
              <p>⏰ {c.time}</p>
              <p>🏫 Room {c.room}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

const styles = {
  layout: { display: "flex", height: "100vh" },

  sidebar: {
    width: "250px",
    background: "#1e272e",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  logo: { textAlign: "center", marginBottom: "20px" },

  link: {
    color: "white",
    textDecoration: "none",
    padding: "10px",
    background: "#485460",
    borderRadius: "6px",
  },

  logout: {
    marginTop: "auto",
    background: "red",
    padding: "10px",
    textAlign: "center",
    color: "white",
    borderRadius: "6px",
    textDecoration: "none",
  },

  content: {
    flex: 1,
    padding: "30px",
    background: "#f1f2f6",
    overflowY: "auto",
  },

  header: {
    background: "#0984e3",
    color: "white",
    padding: "25px",
    borderRadius: "10px",
    marginBottom: "25px",
  },

  stats: {
    display: "flex",
    gap: "20px",
    marginBottom: "30px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  sectionTitle: { marginBottom: "15px" },

  classes: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  classCard: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "220px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
  },
};

export default StudentDashboard;

