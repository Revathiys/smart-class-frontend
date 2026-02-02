import { useState } from "react";

function TeacherAssignments() {

  const [assignments, setAssignments] = useState([
    {
      title: "Python Programming – Unit 3 Assignment",
      subject: "Python",
      due: "2025-01-15",
      description: "Write programs for list, tuple, and dictionary operations."
    },
    {
      title: "DBMS ER Diagram Task",
      subject: "DBMS",
      due: "2025-01-20",
      description: "Design an ER diagram for a Library Management System."
    }
  ]);

  const [newAssignment, setNewAssignment] = useState({
    title: "",
    subject: "",
    due: "",
    description: ""
  });

  const handleChange = (e) => {
    setNewAssignment({
      ...newAssignment,
      [e.target.name]: e.target.value,
    });
  };

  const addAssignment = () => {
    if (!newAssignment.title || !newAssignment.subject || !newAssignment.due) {
      alert("Please fill all required fields!");
      return;
    }

    setAssignments([...assignments, newAssignment]);

    setNewAssignment({
      title: "",
      subject: "",
      due: "",
      description: ""
    });
  };

  return (
    <div style={styles.page}>

      <h1 style={styles.title}>📘 Assignments</h1>
      <p style={styles.subtitle}>Add and manage student assignments</p>

      {/* ADD ASSIGNMENT FORM */}
      <div style={styles.formCard}>
        <h3 style={styles.formTitle}>➕ Create New Assignment</h3>

        <input
          type="text"
          name="title"
          placeholder="Assignment Title"
          value={newAssignment.title}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={newAssignment.subject}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="date"
          name="due"
          value={newAssignment.due}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="description"
          placeholder="Assignment Description"
          value={newAssignment.description}
          onChange={handleChange}
          style={styles.textarea}
        />

        <button onClick={addAssignment} style={styles.addBtn}>
          Add Assignment
        </button>
      </div>

      {/* ASSIGNMENT LIST */}
      <h2 style={styles.sectionTitle}>📄 Assignment List</h2>

      <div style={styles.assignmentsContainer}>
        {assignments.map((item, index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.subject}>Subject: {item.subject}</p>
            <p style={styles.due}>Due: {item.due}</p>
            <p style={styles.description}>{item.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}

const styles = {
  page: {
    padding: "30px",
    background: "#ecf0f1",
    height: "100vh",
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
  },

  // Form card
  formCard: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    marginBottom: "30px",
  },
  formTitle: {
    fontSize: "20px",
    marginBottom: "15px",
    color: "#34495e",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #bdc3c7",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "80px",
    borderRadius: "5px",
    border: "1px solid #bdc3c7",
    marginBottom: "10px",
  },
  addBtn: {
    padding: "12px 20px",
    background: "#2980b9",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },

  // Assignment cards
  sectionTitle: {
    fontSize: "22px",
    marginBottom: "15px",
    color: "#2c3e50",
  },
  assignmentsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  card: {
    background: "white",
    width: "300px",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  cardTitle: { fontSize: "18px", fontWeight: "700", marginBottom: "10px" },
  subject: { marginBottom: "5px", color: "#16a085", fontWeight: "600" },
  due: { marginBottom: "10px", color: "#8e44ad" },
  description: { color: "#34495e" },
};

export default TeacherAssignments;
