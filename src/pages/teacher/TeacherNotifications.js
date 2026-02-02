function TeacherNotifications() {

  // Sample notification data (later from backend)
  const notifications = [
    {
      title: "Timetable Updated",
      message: "Your Wednesday DBMS class timing has been changed.",
      time: "10 mins ago",
      icon: "🕒",
    },
    {
      title: "Meeting Reminder",
      message: "Staff meeting at 4:00 PM in Conference Hall.",
      time: "1 hour ago",
      icon: "📢",
    },
    {
      title: "New Assignment Uploaded",
      message: "C++ Lab assignment has been added for 4th sem.",
      time: "2 hours ago",
      icon: "📚",
    },
    {
      title: "Holiday Notice",
      message: "College will remain closed on Friday due to festival.",
      time: "Yesterday",
      icon: "🎉",
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>🔔 Notifications</h1>
      <p style={styles.subtitle}>Latest updates and announcements for you</p>

      <div style={styles.container}>
        {notifications.map((note, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>{note.icon}</div>

            <div style={styles.textBox}>
              <h3 style={styles.noteTitle}>{note.title}</h3>
              <p style={styles.message}>{note.message}</p>
              <p style={styles.time}>{note.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    height: "100vh",
    background: "#ecf0f1",
    overflowY: "scroll",
  },
  title: {
    fontSize: "30px",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "10px",
  },
  subtitle: {
    color: "#7f8c8d",
    marginBottom: "25px",
    fontSize: "16px",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  card: {
    background: "white",
    padding: "18px",
    borderRadius: "12px",
    display: "flex",
    gap: "15px",
    alignItems: "center",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  icon: {
    fontSize: "30px",
  },
  textBox: {
    flex: 1,
  },
  noteTitle: {
    fontSize: "18px",
    color: "#2c3e50",
    marginBottom: "5px",
  },
  message: {
    color: "#34495e",
    marginBottom: "5px",
  },
  time: {
    fontSize: "13px",
    color: "#7f8c8d",
  },
};

export default TeacherNotifications;
