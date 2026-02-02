import { BrowserRouter, Routes, Route } from "react-router-dom";

// Main pages
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentDashboard from "./pages/StudentDashboard";

// Admin subpages
import AddTeacher from "./pages/admin/AddTeacher";
import AddClassroom from "./pages/admin/AddClassroom";
import AddStudent from "./pages/admin/AddStudent";
import GenerateTimetable from "./pages/admin/GenerateTimetable";
import ViewTimetable from "./pages/admin/ViewTimetable";

// Teacher subpages
import TeacherProfile from "./pages/teacher/TeacherProfile";
import TeacherTimeTable from "./pages/teacher/TeacherTimeTable";
import TeacherAttendance from "./pages/teacher/TeacherAttendance";
import TeacherNotifications from "./pages/teacher/TeacherNotifications";
import TeacherAssignments from "./pages/teacher/TeacherAssignments";
import TeacherSettings from "./pages/teacher/TeacherSettings";

// Student subpages
import StudentProfile from "./pages/student/StudentProfile";
import StudentTimeTable from "./pages/student/StudentTimeTable";
import StudentAttendance from "./pages/student/StudentAttendance";
import StudentNotification from "./pages/student/StudentNotification";
import StudentAssignment from "./pages/student/StudentAssignment";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Dashboards */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />

        {/* Admin subpages */}
        <Route path="/admin/add-teacher" element={<AddTeacher />} />
        <Route path="/admin/add-classroom" element={<AddClassroom />} />
        <Route path="/admin/add-student" element={<AddStudent />} />
        <Route path="/admin/generate-timetable" element={<GenerateTimetable />} />
        <Route path="/admin/view-timetable" element={<ViewTimetable />} />

        {/* Teacher subpages */}
        <Route path="/teacher/profile" element={<TeacherProfile />} />
        <Route path="/teacher/timetable" element={<TeacherTimeTable />} />
        <Route path="/teacher/attendance" element={<TeacherAttendance />} />
        <Route path="/teacher/notifications" element={<TeacherNotifications />} />
         <Route path="/teacher/assignments" element={<TeacherAssignments />} />
        <Route path="/teacher/settings" element={<TeacherSettings />} />

        {/* Student subpages */}
        <Route path="/student/profile" element={<StudentProfile />} />
        <Route path="/student/timetable" element={<StudentTimeTable />} />
        <Route path="/student/attendance" element={<StudentAttendance />} />
        <Route path="/student/notification" element={<StudentNotification />} />
        <Route path="/student/assignment" element={<StudentAssignment />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
