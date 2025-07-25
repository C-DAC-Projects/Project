import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  // Sync login state from localStorage
  const syncLoginState = () => {
    const token = localStorage.getItem("token");
    const userData = JSON.parse(localStorage.getItem("user"));
    if (token && userData?.name) {
      setIsLoggedIn(true);
      setUsername(userData.name);
    } else {
      setIsLoggedIn(false);
      setUsername("");
    }
  };

  useEffect(() => {
    syncLoginState();
    window.addEventListener("storage", syncLoginState); // listen for other tab login/logout

    return () => {
      window.removeEventListener("storage", syncLoginState);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid px-4">
        {/* Left: Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Cutipets Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold text-primary fs-4">Cutipets</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Center + Right */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Center Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/pets">Pets</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/veterinary">Veterinary</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/adopt">Adopt</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/help">Help</Link></li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex me-3">
            <input
              className="form-control"
              type="search"
              placeholder="Search pets or products..."
              aria-label="Search"
            />
          </form>

          {/* User Auth Buttons */}
          {isLoggedIn ? (
            <div className="d-flex align-items-center">
              <i className="bi bi-person-circle fs-4 text-primary me-2"></i>
              <span className="me-3 fw-medium">{username}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="btn btn-outline-primary">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
