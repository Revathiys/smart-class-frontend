function TeacherTimetable() {
  // Sample timetable (later connect backend)
  const timetable = [
    { day: "Monday",    time: "09:00 AM - 10:00 AM", subject: "Python",           room: "202" },
    { day: "Monday",    time: "11:00 AM - 12:00 PM", subject: "Operating System", room: "101" },
    { day: "Tuesday",   time: "10:00 AM - 11:00 AM", subject: "DBMS",             room: "305" },
    { day: "Wednesday", time: "01:00 PM - 02:00 PM", subject: "Networking",       room: "303" },
    { day: "Thursday",  time: "09:00 AM - 10:00 AM", subject: "Maths",            room: "201" },
    { day: "Friday",    time: "11:00 AM - 12:00 PM", subject: "AI Basics",        room: "404" },
  ];

  return (
    <div style={styles.container}>

      {/* Header */}
      <h1 style={styles.title}>📅 My Timetable</h1>
      <p style={styles.subtitle}>Your weekly class schedule is shown below.</p>

      {/* Teacher Card */}
      <div style={styles.profileCard}>
        <div style={styles.avatar}></div>
        <div>
          <h2 style={styles.teacherName}>Ravi Kumar</h2>
          <p style={styles.teacherDept}>Department of Computer Science</p>
        </div>
      </div>

      {/* Timetable Table */}
      <div style={styles.card}>
        <table style={styles.table}>
          <thead>
            <tr style={styles.headerRow}>
              <th style={styles.th}>Day</th>
              <th style={styles.th}>Time</th>
              <th style={styles.th}>Subject</th>
              <th style={styles.th}>Room</th>
            </tr>
          </thead>

          <tbody>
            {timetable.map((row, i) => (
              <tr key={i} style={styles.row}>
                <td style={styles.td}>{row.day}</td>
                <td style={styles.td}>{row.time}</td>
                <td style={styles.td}>{row.subject}</td>
                <td style={styles.td}>{row.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    background: "#ecf0f1",
    minHeight: "100vh",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#7f8c8d",
    marginBottom: "25px",
  },

  // Profile Card
  profileCard: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "500px",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #6C5CE7, #A29BFE)",
  },
  teacherName: {
    margin: 0,
    fontSize: "22px",
    fontWeight: "700",
  },
  teacherDept: {
    marginTop: "5px",
    color: "#555",
  },

  // Table Card
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflowX: "auto",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    padding: "12px",
    background: "#6C5CE7",
    color: "white",
    fontSize: "15px",
    textAlign: "left",
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
  },
  row: {
    background: "white",
  },
  headerRow: {
    borderRadius: "10px",
  },
};

export default TeacherTimetable;
