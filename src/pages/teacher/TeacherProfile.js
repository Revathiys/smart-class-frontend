function TeacherProfile() {
  const teacher = {
    name: "Ravi Kumar",
    department: "Computer Science",
    email: "ravi.kumar@college.edu",
    phone: "+91 98765 12345",
    qualifications: "MCA, NET",
    experience: "5 Years",
    subjects: ["Python", "DBMS", "Operating System", "AI Basics"],
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>👨‍🏫 Teacher Profile</h1>
      <p style={styles.subtitle}>View your personal and professional details.</p>

      {/* Profile Card */}
      <div style={styles.profileCard}>
        {/* Photo */}
        <div style={styles.photo}></div>

        {/* Info */}
        <div style={{ flex: 1 }}>
          <h2 style={styles.name}>{teacher.name}</h2>
          <p style={styles.dept}>{teacher.department}</p>

          <div style={styles.infoSection}>
            <p><strong>Email:</strong> {teacher.email}</p>
            <p><strong>Phone:</strong> {teacher.phone}</p>
            <p><strong>Qualification:</strong> {teacher.qualifications}</p>
            <p><strong>Experience:</strong> {teacher.experience}</p>
          </div>
        </div>
      </div>

      {/* Subjects Card */}
      <div style={styles.subjectCard}>
        <h3 style={styles.subjectTitle}>📚 Subjects Handled</h3>

        <ul style={styles.subjectList}>
          {teacher.subjects.map((sub, index) => (
            <li key={index} style={styles.subjectItem}>
              {sub}
            </li>
          ))}
        </ul>
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

  // PROFILE CARD
  profileCard: {
    display: "flex",
    gap: "20px",
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
    alignItems: "center",
  },
  photo: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    background: "linear-gradient(145deg, #6C5CE7, #A29BFE)",
  },
  name: {
    margin: 0,
    fontSize: "24px",
    color: "#2C3E50",
    fontWeight: "700",
  },
  dept: {
    color: "#7f8c8d",
    fontSize: "16px",
    marginTop: "5px",
    marginBottom: "15px",
  },
  infoSection: {
    lineHeight: "1.8",
    color: "#555",
  },

  // SUBJECTS CARD
  subjectCard: {
    background: "white",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    maxWidth: "400px",
  },
  subjectTitle: {
    marginBottom: "15px",
    fontSize: "20px",
  },
  subjectList: {
    listStyle: "none",
    paddingLeft: "0",
  },
  subjectItem: {
    background: "#6C5CE7",
    color: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    marginBottom: "10px",
    fontSize: "15px",
  },
};

export default TeacherProfile;
