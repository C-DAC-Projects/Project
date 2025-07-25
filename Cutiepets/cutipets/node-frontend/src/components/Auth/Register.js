// src/components/Auth/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';
import logo from '../../assets/logo.png';


const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    mobile: '',
    role: 'User',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5292/api/Auth/register', formData);
      alert('Registration successful. Please login!');
    } catch (err) {
      alert('Registration failed');
      console.error(err);
    }
  };

  return (
    <div className="auth-container d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <img src={logo} alt="Cutipets Logo" className="mb-4" style={{ width: '120px' }} />
      <div className="card p-4 shadow-sm" style={{ width: '400px' }}>
        <h4 className="text-center mb-3">Register</h4>
        <form onSubmit={handleRegister}>
          <div className="mb-2">
            <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-2">
            <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-2">
            <input type="password" name="password" className="form-control" placeholder="Password" value={formData.password} onChange={handleChange} required />
          </div>
          <div className="mb-2">
            <input type="text" name="mobile" className="form-control" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <select name="role" className="form-select" value={formData.role} onChange={handleChange}>
              <option>User</option>
              <option>Doctor</option>
              <option>Admin</option>
            </select>
          </div>
          <div className="text-center mt-3">
  <p>Already registered? <a href="/login">Login here</a></p>
</div>

          <button type="submit" className="btn btn-success w-100">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
