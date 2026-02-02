function StudentNotification() {
  const notifications = [
    {
      title: "New Assignment Uploaded",
      message: "Python OOP assignment is uploaded. Submit before Feb 15.",
      category: "Assignment",
      time: "2 hours ago",
      read: false,
    },
    {
      title: "Timetable Updated",
      message: "Your Wednesday DBMS class is shifted to Room 305.",
      category: "Timetable",
      time: "Yesterday",
      read: false,
    },
    {
      title: "Internal Marks Released",
      message: "OS Internal marks have been published. Check the portal.",
      category: "Exam",
      time: "2 days ago",
      read: true,
    },
    {
      title: "Holiday Notice",
      message: "College will remain closed on Feb 10 (Friday).",
      category: "Announcement",
      time: "3 days ago",
      read: true,
    },
  ];

  // Category colors
  const categoryColors = {
    Assignment: "#8e44ad",
    Timetable: "#2980b9",
    Exam: "#c0392b",
    Announcement: "#16a085",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🔔 Notifications</h1>
      <p style={styles.subtitle}>Stay updated with latest announcements</p>

      <div style={styles.list}>
        {notifications.map((n, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              background: n.read ? "#ffffff" : "#f5f0ff",
              borderLeft: `6px solid ${categoryColors[n.category]}`,
            }}
          >
            {/* Category Tag */}
            <div
              style={{
                ...styles.tag,
                background: categoryColors[n.category],
              }}
            >
              {n.category}
            </div>

            {/* Title */}
            <h2 style={styles.notificationTitle}>{n.title}</h2>

            {/* Message */}
            <p style={styles.message}>{n.message}</p>

            {/* Time */}
            <p style={styles.time}>{n.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- STYLE ---------------- */
const styles = {
  container: {
    padding: "30px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    color: "#2c3e50",
    marginBottom: "5px",
  },

  subtitle: {
    color: "#7f8c8d",
    marginBottom: "20px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    position: "relative",
  },

  tag: {
    color: "white",
    fontSize: "13px",
    padding: "5px 10px",
    borderRadius: "6px",
    display: "inline-block",
    marginBottom: "10px",
  },

  notificationTitle: {
    fontSize: "20px",
    margin: "8px 0",
    color: "#2c3e50",
  },

  message: {
    color: "#7f8c8d",
    marginBottom: "10px",
  },

  time: {
    fontSize: "12px",
    color: "#95a5a6",
  },
};

export default StudentNotification;
