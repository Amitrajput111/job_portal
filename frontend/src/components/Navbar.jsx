import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Navbar.css";

function Navbar() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <h2>JobPortal</h2>
      </Link>
      <div className="navbar-links">
        <Link to="/jobs">Browse Jobs</Link>
        {user ? (
          <>
            <Link to="/profile">Profile</Link>
            <span className="user-name">{user.fullname}</span>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register" className="btn-register">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
