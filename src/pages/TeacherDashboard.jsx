import { Link } from "react-router-dom";

function TeacherDashboard() {
  // Demo schedule data (later we connect backend)
  const todaySchedule = [
    { time: "09:00 AM - 10:00 AM", subject: "Python Programming", room: "202" },
    { time: "11:00 AM - 12:00 PM", subject: "Operating System", room: "101" },
    { time: "02:00 PM - 03:00 PM", subject: "DBMS", room: "305" },
  ];

  return (
    <div style={styles.layout}>

      {/* SIDEBAR */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>Teacher</h2>

        <Link to="/teacher" style={styles.link}>🏠 Dashboard</Link>
        <Link to="/teacher/timetable" style={styles.link}>📅 My Timetable</Link>
        <Link to="/teacher/profile" style={styles.link}>👤 Profile</Link>
        <Link to="/teacher/attendance" style={styles.link}>📝 Attendance</Link>
        <Link to="/teacher/notifications" style={styles.link}>🔔 Notifications</Link>
        <Link to="/teacher/assignments" style={styles.link}>📘 Assignments</Link>
        <Link to="/teacher/settings" style={styles.link}>⚙️ Settings</Link>
        <Link to="/" style={styles.logout}>🚪 Logout</Link>

      </div>

      {/* MAIN CONTENT */}
      <div style={styles.content}>
        
        {/* HEADER BANNER */}
        <div style={styles.header}>
          <h1 style={styles.title}>Hello, Teacher 👋</h1>
          <p style={styles.subtitle}>Here is your schedule for today</p>
        </div>

        {/* TODAY SCHEDULE */}
        <h2 style={styles.sectionTitle}>Today's Classes</h2>

        <div style={styles.scheduleContainer}>
          {todaySchedule.map((item, i) => (
            <div key={i} style={styles.classCard}>
              <h3 style={styles.classSubject}>{item.subject}</h3>
              <p style={styles.classTime}>{item.time}</p>
              <p style={styles.classRoom}>Room: {item.room}</p>
            </div>
          ))}
        </div>

        {/* QUICK ACTIONS */}
        <h2 style={styles.sectionTitle}>Quick Actions</h2>

        <div style={styles.actionsContainer}>
          <Link to="/teacher/timetable" style={styles.actionBtn}>📄 View Full Timetable</Link>
          <Link to="/teacher/profile" style={styles.actionBtn}>⚙️ Edit Profile</Link>
          <Link to="/" style={styles.actionBtn}>🚪 Logout</Link>
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
    background: "#2C3E50",
    color: "white",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  logo: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "22px",
  },
  link: {
    padding: "12px",
    background: "#34495E",
    textDecoration: "none",
    color: "white",
    borderRadius: "6px",
  },
  logout: {
    marginTop: "auto",
    padding: "12px",
    background: "red",
    textDecoration: "none",
    color: "white",
    borderRadius: "6px",
  },

  // CONTENT AREA
  content: {
    flex: 1,
    padding: "30px",
    background: "#ecf0f1",
    overflowY: "scroll",
  },

  // BANNER
  header: {
    padding: "25px",
    background: "#8e44ad",
    color: "white",
    borderRadius: "10px",
    marginBottom: "30px",
  },
  title: { margin: 0, fontSize: "30px" },
  subtitle: { marginTop: "8px", fontSize: "16px", opacity: 0.9 },

  // Today schedule
  sectionTitle: {
    marginBottom: "15px",
    fontSize: "22px",
    fontWeight: "600",
  },
  scheduleContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "30px",
  },
  classCard: {
    background: "white",
    padding: "20px",
    width: "250px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  classSubject: { margin: 0, fontSize: "18px", color: "#2c3e50" },
  classTime: { margin: "8px 0", color: "#7f8c8d" },
  classRoom: { color: "#34495e", fontWeight: "600" },

  // Quick actions
  actionsContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  actionBtn: {
    padding: "12px 18px",
    background: "#2980b9",
    color: "white",
    borderRadius: "8px",
    textDecoration: "none",
    fontSize: "15px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
  },
};

export default TeacherDashboard;
