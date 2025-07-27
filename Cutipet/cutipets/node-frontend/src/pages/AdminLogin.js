import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const hardcodedAdmin = {
    email: 'admin@cutipets.com',
    password: 'admin123'
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      formData.email === hardcodedAdmin.email &&
      formData.password === hardcodedAdmin.password
    ) {
      alert('Admin login successful!');
      navigate('/admin/dashboard'); // Redirect to your admin panel
    } else {
      alert('Invalid admin credentials.');
    }
  };

  return (
    <div className="auth-container d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <img src={logo} alt="Cutipets Logo" className="mb-4" style={{ width: '120px' }} />
      <div className="card p-4 shadow-sm" style={{ width: '350px' }}>
        <h4 className="text-center mb-3">Admin Login</h4>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Admin Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-dark w-100">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
