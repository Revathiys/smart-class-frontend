import AdminLayout from "../components/layout/AdminLayout";

function AdminDashboard() {
  return (
    <AdminLayout>

      {/* HEADER BANNER */}
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome, Admin 👋</h1>
        <p style={styles.subtitle}>Manage teachers, students, classrooms & timetables efficiently.</p>
      </div>

      {/* STAT CARDS */}
      <div style={styles.cardsContainer}>
        
        <div style={styles.card}>
          <h2 style={styles.cardNumber}>12</h2>
          <p style={styles.cardLabel}>Teachers</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardNumber}>24</h2>
          <p style={styles.cardLabel}>Classrooms</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardNumber}>250</h2>
          <p style={styles.cardLabel}>Students</p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardNumber}>6</h2>
          <p style={styles.cardLabel}>Daily Periods</p>
        </div>
      </div>

      {/* QUICK ACTIONS */}
      <h2 style={styles.sectionTitle}>Quick Actions</h2>

      <div style={styles.actionsContainer}>
        <a href="/admin/add-teacher" style={styles.actionBtn}>➕ Add Teacher</a>
        <a href="/admin/add-classroom" style={styles.actionBtn}>🏫 Add Classroom</a>
        <a href="/admin/add-student" style={styles.actionBtn}>👨‍🎓 Add Student</a>
        <a href="/admin/generate-timetable" style={styles.actionBtn}>🗓️ Generate Timetable</a>
        <a href="/admin/view-timetable" style={styles.actionBtn}>📄 View Timetable</a>
      </div>

    </AdminLayout>
  );
}

const styles = {
  header: {
    background: "#3498db",
    padding: "30px",
    borderRadius: "10px",
    color: "white",
    marginBottom: "30px",
  },
  title: {
    margin: 0,
    fontSize: "32px",
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "16px",
    opacity: 0.9,
  },
  cardsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  },
  card: {
    background: "white",
    borderRadius: "10px",
    padding: "25px",
    textAlign: "center",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  cardNumber: {
    fontSize: "32px",
    margin: 0,
    color: "#2c3e50",
  },
  cardLabel: {
    marginTop: "10px",
    fontSize: "14px",
    color: "#7f8c8d",
  },
  sectionTitle: {
    marginBottom: "20px",
    fontSize: "22px",
    color: "#2c3e50",
  },
  actionsContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },
  actionBtn: {
    padding: "12px 18px",
    background: "#2ecc71",
    color: "white",
    textDecoration: "none",
    borderRadius: "8px",
    fontSize: "15px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
  },
};

export default AdminDashboard;
