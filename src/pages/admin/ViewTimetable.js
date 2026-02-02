import AdminLayout from "../../components/layout/AdminLayout";

function ViewTimetable() {
  // Sample timetable data (we can connect backend later)
  const timetable = [
    { day: "Monday",   subject: "Operating System", teacher: "Ravi Kumar",    room: "101", time: "10:00 AM - 11:00 AM" },
    { day: "Monday",   subject: "Python",           teacher: "Priya Sharma",  room: "202", time: "11:00 AM - 12:00 PM" },
    { day: "Tuesday",  subject: "DBMS",             teacher: "Suresh Gowda",  room: "105", time: "09:00 AM - 10:00 AM" },
    { day: "Wednesday",subject: "Networking",       teacher: "Meena Rao",     room: "303", time: "01:00 PM - 02:00 PM" },
    { day: "Thursday", subject: "Maths",            teacher: "Arun Mishra",   room: "201", time: "10:00 AM - 11:00 AM" },
  ];

  return (
    <AdminLayout>
      <div style={styles.container}>
        
        {/* Heading */}
        <h1 style={styles.title}>📄 View Timetable</h1>
        <p style={styles.subtitle}>Here is the generated timetable in a clean table view.</p>

        {/* Timetable Card */}
        <div style={styles.card}>
          <table style={styles.table}>
            <thead>
              <tr style={styles.headerRow}>
                <th style={styles.th}>Day</th>
                <th style={styles.th}>Subject</th>
                <th style={styles.th}>Teacher</th>
                <th style={styles.th}>Room</th>
                <th style={styles.th}>Time</th>
              </tr>
            </thead>

            <tbody>
              {timetable.map((row, index) => (
                <tr key={index} style={styles.row}>
                  <td style={styles.td}>{row.day}</td>
                  <td style={styles.td}>{row.subject}</td>
                  <td style={styles.td}>{row.teacher}</td>
                  <td style={styles.td}>{row.room}</td>
                  <td style={styles.td}>{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </AdminLayout>
  );
}

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "5px",
  },
  subtitle: {
    color: "#666",
    marginBottom: "25px",
  },
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
    background: "#34495E",
    color: "white",
    textAlign: "left",
    fontSize: "14px",
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

export default ViewTimetable;
