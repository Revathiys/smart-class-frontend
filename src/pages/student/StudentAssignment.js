function StudentTimetable() {
  const timetable = {
    Monday: [
      { time: "09:00 - 10:00", subject: "Python Programming", room: "102" },
      { time: "10:00 - 11:00", subject: "DBMS", room: "203" },
      { time: "11:00 - 12:00", subject: "Break", room: "" },
      { time: "12:00 - 01:00", subject: "Web Development", room: "205" },
    ],
    Tuesday: [
      { time: "09:00 - 10:00", subject: "Operating System", room: "301" },
      { time: "10:00 - 11:00", subject: "Python Programming", room: "102" },
      { time: "11:00 - 12:00", subject: "Break", room: "" },
      { time: "12:00 - 01:00", subject: "DBMS Lab", room: "Lab-2" },
    ],
    Wednesday: [
      { time: "09:00 - 10:00", subject: "Computer Networks", room: "204" },
      { time: "10:00 - 11:00", subject: "OS Lab", room: "Lab-1" },
      { time: "11:00 - 12:00", subject: "Break", room: "" },
      { time: "12:00 - 01:00", subject: "DBMS", room: "203" },
    ],
    Thursday: [
      { time: "09:00 - 10:00", subject: "Web Development", room: "205" },
      { time: "10:00 - 11:00", subject: "Python Programming", room: "102" },
      { time: "11:00 - 12:00", subject: "Break", room: "" },
      { time: "12:00 - 01:00", subject: "Computer Networks", room: "204" },
    ],
    Friday: [
      { time: "09:00 - 10:00", subject: "DBMS Lab", room: "Lab-2" },
      { time: "10:00 - 11:00", subject: "OS Lab", room: "Lab-1" },
      { time: "11:00 - 12:00", subject: "Break", room: "" },
      { time: "12:00 - 01:00", subject: "DBMS", room: "203" },
    ],
    Saturday: [
      { time: "09:00 - 10:00", subject: "Sports / Activities", room: "Ground" },
      { time: "10:00 - 11:00", subject: "Library Hour", room: "Library" },
    ],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>📅 Weekly Timetable</h1>
      <p style={styles.subtitle}>Your full weekly class schedule</p>

      <div style={styles.weekContainer}>
        {Object.entries(timetable).map(([day, classes]) => (
          <div key={day} style={styles.dayCard}>
            <h2 style={styles.dayTitle}>{day}</h2>

            {classes.map((c, i) => (
              <div
                key={i}
                style={{
                  ...styles.classBox,
                  background:
                    c.subject === "Break"
                      ? "#f0b27a"
                      : "#aed6f1",
                }}
              >
                <h3 style={styles.classSubject}>{c.subject}</h3>
                <p style={styles.classTime}>{c.time}</p>
                {c.room && <p style={styles.classRoom}>Room: {c.room}</p>}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* -------------- STYLES -------------- */
const styles = {
  container: {
    padding: "30px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "25px",
    color: "#7f8c8d",
  },

  weekContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
  },

  dayCard: {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
  },

  dayTitle: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "15px",
    color: "#34495e",
  },

  classBox: {
    padding: "12px",
    borderRadius: "8px",
    marginBottom: "12px",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
  },

  classSubject: {
    margin: 0,
    fontWeight: "600",
    color: "#2c3e50",
  },

  classTime: {
    marginTop: "5px",
    color: "#7f8c8d",
  },

  classRoom: {
    marginTop: "5px",
    fontWeight: "600",
    color: "#34495e",
  },
};

export default StudentTimetable;
