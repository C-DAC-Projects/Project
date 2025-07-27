import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useAuth } from "../Context/AuthContext";
import ProtectedLink from "./ProtectedLink"; // ✅ adjust the path if needed

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img src={logo} alt="Cutipets Logo" width="40" height="40" className="me-2" />
          <span className="fw-bold text-primary fs-4">Cutipets</span>
        </Link>

        {/* Toggle button for mobile */}
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

        {/* Nav Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <ProtectedLink className="nav-link" to="/pets">Pets</ProtectedLink>
            </li>
            <li className="nav-item">
              <ProtectedLink className="nav-link" to="/products">Products</ProtectedLink>
            </li>
            <li className="nav-item">
              <ProtectedLink className="nav-link" to="/veterinary">Veterinary</ProtectedLink>
            </li>
            <li className="nav-item">
              <ProtectedLink className="nav-link" to="/adopt">Adopt</ProtectedLink>
            </li>
            <li className="nav-item">
              <ProtectedLink className="nav-link" to="/help">Help</ProtectedLink>
            </li>
          </ul>

          {/* Right section */}
          <div className="d-flex align-items-center gap-2">
            {/* Search bar */}
            <form className="d-flex me-3">
              <input
                className="form-control"
                type="search"
                placeholder="Search pets or products..."
                aria-label="Search"
              />
            </form>

            {/* Admin Link */}
            <Link to="/admin-login" className="btn btn-outline-secondary btn-sm me-2">
              Admin
            </Link>

            {/* Auth buttons or user info */}
            {!currentUser ? (
              <Link to="/login" className="btn btn-outline-primary btn-sm">Login</Link>
            ) : (
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                  Logout
                </button>
                <i className="bi bi-person-circle fs-4 text-primary"></i>
                <span className="fw-medium">{currentUser.name}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
