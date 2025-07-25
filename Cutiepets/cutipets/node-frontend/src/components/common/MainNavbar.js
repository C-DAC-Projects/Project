import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import buySellImg from "../../assets/BuySell.jpeg";
import vetImg from "../../assets/appointments.jpg";
import productImg from "../../assets/petproduct.jpg";
import adoptImg from "../../assets/adopt.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MainNavbar.css";

const MainNavbar = () => {
  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img src={logo} alt="Cutipets Logo" width="40" height="40" className="me-2" />
            <span className="fw-bold text-primary fs-4">Cutipets</span>
          </Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><Link className="nav-link" to="/pets">Pets</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/veterinary">Veterinary</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/adopt">Adopt</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/help">Help</Link></li>
            </ul>
            <div className="d-flex">
              <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* BANNER */}
      <div className="bg-light text-center py-5">
        <h1 className="display-4 fw-bold text-dark">Welcome to Cutipets!</h1>
        <p className="lead text-muted">Buy, sell, adopt, and care for pets all in one place</p>
      </div>

      {/* FEATURE SECTIONS */}
      <div className="container py-5">
        {/* Buy & Sell Pets */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={buySellImg} className="img-fluid rounded" alt="Buy & Sell Pets" style={{
        width: "100%",
        height: "auto",
        maxHeight: "350px",
        objectFit: "cover",
        borderRadius: "12px",
      }} />
          </div>
          <div className="col-md-6">
            <h2 className="text-primary">Buy & Sell Pets</h2>
            <p>Discover loving homes for your pets or bring home a new friend today.</p>
          </div>
        </div>

        {/* Veterinary Services */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src={vetImg} className="img-fluid rounded" alt="Veterinary Services" />
          </div>
          <div className="col-md-6">
            <h2 className="text-success">Veterinary Services</h2>
            <p>Book appointments with verified doctors to ensure your pets stay healthy and happy.</p>
          </div>
        </div>

        {/* Pet Products */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6">
            <img src={productImg} className="img-fluid rounded" alt="Pet Products" />
          </div>
          <div className="col-md-6">
            <h2 className="text-warning">Pet Products</h2>
            <p>Shop food, toys, medicine, clothing, and accessories for your pets at the best prices.</p>
          </div>
        </div>

        {/* Adopt a Pet */}
        <div className="row align-items-center mb-5 flex-md-row-reverse">
          <div className="col-md-6">
            <img src={adoptImg} className="img-fluid rounded" alt="Adopt a Pet" />
          </div>
          <div className="col-md-6">
            <h2 className="text-danger">Adopt a Pet</h2>
            <p>Rescue and adopt pets for free from verified dog centers. Give them a second chance at life.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-dark text-white py-4 mt-5">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Cutipets. All rights reserved.</p>
          <p>Follow us on:{" "}
            <a
              href="https://instagram.com"
              className="text-white ms-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>{" "}
            |{" "}
            <a
              href="https://facebook.com"
              className="text-white ms-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>{" "}
            |{" "}
            <a
              href="https://twitter.com"
              className="text-white ms-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainNavbar;
