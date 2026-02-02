import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isCardHovered, setIsCardHovered] = useState(false);
  const [focusedInput, setFocusedInput] = useState(""); // track which input is focused

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "admin" && email === "admin@gmail.com" && password === "admin123") {
      navigate("/admin");
    } else if (role === "teacher" && email === "teacher@gmail.com" && password === "teacher123") {
      navigate("/teacher");
    } else if (role === "student" && email === "student@gmail.com" && password === "student123") {
      navigate("/student");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.card,
          transform: isCardHovered ? "rotateY(5deg) scale(1.02)" : "rotateY(0deg) scale(1)",
          boxShadow: isCardHovered
            ? "0 15px 35px rgba(0,0,0,0.3)"
            : "0 8px 25px rgba(0,0,0,0.2), 0 0 20px rgba(108,92,231,0.5)",
        }}
        onMouseEnter={() => setIsCardHovered(true)}
        onMouseLeave={() => setIsCardHovered(false)}
      >
        <h1 style={styles.title}>Smart Class Scheduler</h1>
        <p style={styles.subtitle}>Login to continue</p>

        <form style={styles.form} onSubmit={handleLogin}>
          {/* Role Selection */}
          <div style={styles.inputGroup}>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              style={styles.select}
            >
              <option value="admin">👑 Admin</option>
              <option value="teacher">👩‍🏫 Teacher</option>
              <option value="student">🎓 Student</option>
            </select>
          </div>

          {/* Email */}
          <div style={styles.inputGroup}>
            <input
              type="email"
              placeholder="Email"
              style={{
                ...styles.input,
                borderColor: focusedInput === "email" ? "#6C5CE7" : "#ccc",
                boxShadow: focusedInput === "email" ? "0 0 8px rgba(108,92,231,0.5)" : "none",
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onFocus={() => setFocusedInput("email")}
              onBlur={() => setFocusedInput("")}
            />
          </div>

          {/* Password */}
          <div style={styles.inputGroup}>
            <input
              type="password"
              placeholder="Password"
              style={{
                ...styles.input,
                borderColor: focusedInput === "password" ? "#6C5CE7" : "#ccc",
                boxShadow: focusedInput === "password" ? "0 0 8px rgba(108,92,231,0.5)" : "none",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              onFocus={() => setFocusedInput("password")}
              onBlur={() => setFocusedInput("")}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => e.target.style.transform = "scale(1.05)"}
            onMouseLeave={(e) => e.target.style.transform = "scale(1)"}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    background: "linear-gradient(135deg, #6e8efb, #a777e3)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    animation: "gradientMove 10s ease infinite",
  },
  card: {
    background: "white",
    width: "400px",
    padding: "40px",
    borderRadius: "16px",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },
  title: {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "5px",
    color: "#333",
  },
  subtitle: {
    color: "#888",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  inputGroup: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    transition: "all 0.3s ease",
  },
  select: {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  button: {
    marginTop: "10px",
    padding: "14px",
    background: "#6C5CE7",
    color: "white",
    border: "none",
    fontSize: "16px",
    borderRadius: "10px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Login;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:5000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         setError(data.message);
//         return;
//       }

//       // Redirect based on role
//       if (data.role === "admin") {
//         navigate("/admin");
//       } else if (data.role === "teacher") {
//         navigate("/teacher");
//       } else if (data.role === "student") {
//         navigate("/student");
//       }

//     } catch (err) {
//       setError("Server not responding");
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={handleLogin} style={styles.card}>
//         <h2 style={styles.title}>Smart Class Login</h2>

//         {error && <p style={styles.error}>{error}</p>}

//         <input
//           type="email"
//           placeholder="Email"
//           style={styles.input}
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           style={styles.input}
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button style={styles.button}>Login</button>
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "#ecf0f1",
//   },
//   card: {
//     background: "white",
//     padding: "30px",
//     width: "350px",
//     borderRadius: "10px",
//     boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
//   },
//   title: {
//     textAlign: "center",
//     marginBottom: "20px",
//   },
//   input: {
//     width: "100%",
//     padding: "10px",
//     marginBottom: "15px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     width: "100%",
//     padding: "10px",
//     background: "#2980b9",
//     color: "white",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//   },
//   error: {
//     color: "red",
//     textAlign: "center",
//     marginBottom: "10px",
//   },
// };

// export default Login;
