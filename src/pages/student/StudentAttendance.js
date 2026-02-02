function StudentAttendance() {
  const attendanceData = [
    { subject: "Python Programming", attended: 32, total: 40 },
    { subject: "Web Development", attended: 28, total: 36 },
    { subject: "Operating System", attended: 25, total: 34 },
    { subject: "DBMS", attended: 30, total: 38 },
    { subject: "Computer Networks", attended: 18, total: 30 },
  ];

  // Calculate percentage function
  const getPercentage = (attended, total) => ((attended / total) * 100).toFixed(1);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📝 Attendance Report</h1>
      <p style={styles.subtitle}>Your subject-wise attendance summary</p>

      {/* SUBJECT LIST */}
      <div style={styles.list}>
        {attendanceData.map((item, i) => {
          const percentage = getPercentage(item.attended, item.total);

          // Color logic
          const progressColor =
            percentage >= 75 ? "#2ecc71" : percentage >= 60 ? "#f1c40f" : "#e74c3c";

          return (
            <div key={i} style={styles.card}>
              <h2 style={styles.subject}>{item.subject}</h2>
              <p style={styles.details}>
                Attended: {item.attended} / {item.total}
              </p>

              {/* PROGRESS BAR */}
              <div style={styles.progressBar}>
                <div
                  style={{
                    ...styles.progressFill,
                    width: `${percentage}%`,
                    background: progressColor,
                  }}
                ></div>
              </div>

              <p style={styles.percentText}>{percentage}%</p>
            </div>
          );
        })}
      </div>

      {/* OVERALL ATTENDANCE */}
      <div style={styles.overallCard}>
        <h2 style={styles.overallTitle}>📊 Overall Attendance</h2>
        <p style={styles.overallPercent}>83.4%</p>
      </div>
    </div>
  );
}

/* ------------ STYLES ------------ */
const styles = {
  container: {
    padding: "30px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#2c3e50",
  },

  subtitle: {
    marginBottom: "25px",
    color: "#7f8c8d",
    fontSize: "16px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    maxWidth: "700px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
  },

  subject: {
    margin: 0,
    fontSize: "20px",
    fontWeight: "600",
    color: "#2c3e50",
  },

  details: {
    margin: "10px 0",
    color: "#7f8c8d",
  },

  progressBar: {
    width: "100%",
    height: "12px",
    background: "#dcdcdc",
    borderRadius: "10px",
    overflow: "hidden",
  },

  progressFill: {
    height: "100%",
    borderRadius: "10px",
  },

  percentText: {
    marginTop: "8px",
    fontWeight: "600",
    color: "#34495e",
  },

  /* Overall Attendance Card */
  overallCard: {
    marginTop: "40px",
    padding: "20px",
    maxWidth: "300px",
    borderRadius: "12px",
    background: "#3498db",
    color: "white",
    textAlign: "center",
  },

  overallTitle: {
    margin: 0,
    fontSize: "20px",
  },

  overallPercent: {
    fontSize: "38px",
    marginTop: "10px",
    fontWeight: "700",
  },
};

export default StudentAttendance;
