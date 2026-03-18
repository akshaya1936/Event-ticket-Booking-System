import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  // ✅ Get user from localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <h2 className="logo">🎟 TicketPro</h2>
      </div>

      {/* CENTER */}
      <div className="nav-center">
        <Link to="/">Events</Link>
        <Link to="/tickets">My Tickets</Link>
        <Link to="/scanner">Scanner</Link>
        {/* <Link to="/dashboard">Dashboard</Link> */}
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        {user ? (
          <>
            <span className="user-name">Hi, {user.name}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup" className="signup-btn">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}