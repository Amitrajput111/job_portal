import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { JobProvider } from "./context/JobContext";
import { FiltersProvider } from "./context/FiltersContext";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Profile from "./pages/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <AuthProvider>
        <JobProvider>
          <FiltersProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/jobs/:id" element={<JobDetails />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
            <Footer />
          </FiltersProvider>
        </JobProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
