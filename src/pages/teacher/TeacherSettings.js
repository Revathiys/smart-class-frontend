import { useState } from "react";

function TeacherSettings() {
  const [form, setForm] = useState({
    name: "John Doe",
    email: "teacher@example.com",
    phone: "9876543210",
    notifications: true,
    theme: "light",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings updated successfully!");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>⚙️ Teacher Settings</h1>

      <form onSubmit={handleSubmit} style={styles.form}>
        
        {/* PROFILE SECTION */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Profile Information</h2>

          <label style={styles.label}>Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            style={styles.input}
          />

          <label style={styles.label}>Phone Number</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        {/* PASSWORD SECTION */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>Change Password</h2>

          <label style={styles.label}>Current Password</label>
          <input type="password" style={styles.input} />

          <label style={styles.label}>New Password</label>
          <input type="password" style={styles.input} />

          <label style={styles.label}>Confirm New Password</label>
          <input type="password" style={styles.input} />
        </div>

        {/* APP SETTINGS */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>App Preferences</h2>

          <label style={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="notifications"
              checked={form.notifications}
              onChange={handleChange}
            />
            Enable Notifications
          </label>

          <label style={styles.label}>Theme</label>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            style={styles.input}
          >
            <option value="light">🌞 Light</option>
            <option value="dark">🌙 Dark</option>
          </select>
        </div>

        <button type="submit" style={styles.saveBtn}>
          💾 Save Changes
        </button>
      </form>
    </div>
  );
}

/* ======== STYLES ======== */
const styles = {
  container: {
    padding: "30px",
  },

  title: {
    fontSize: "32px",
    fontWeight: "700",
    marginBottom: "25px",
    color: "#2c3e50",
  },

  form: {
    maxWidth: "600px",
    background: "white",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },

  section: {
    marginBottom: "25px",
  },

  sectionTitle: {
    fontSize: "20px",
    marginBottom: "15px",
    fontWeight: "600",
    color: "#34495e",
  },

  label: {
    fontWeight: "600",
    display: "block",
    marginBottom: "5px",
  },

  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "15px",
  },

  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },

  saveBtn: {
    padding: "12px 20px",
    background: "#27ae60",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "600",
  },
};

export default TeacherSettings;
