// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import AdminLogin from './pages/AdminLogin'; // ✅ Add this line
import AdminDashboard from './pages/AdminDashboard';


const AppRoutes = ({ isLoggedIn, username, handleLogout }) => {
  const location = useLocation();
  const showFooter = location.pathname === "/" || location.pathname === "/dashboard";

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>
      {showFooter && <Footer />}
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.name) {
      setIsLoggedIn(true);
      setUsername(user.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
    window.location.href = "/"; // Optional: redirect to homepage after logout
  };

  return (
    <Router>
      <AppRoutes isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
    </Router>
  );
}

export default App;
