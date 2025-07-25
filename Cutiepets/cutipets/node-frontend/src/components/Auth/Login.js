import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Auth.css';
import logo from '../../assets/logo.png';

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending:', formData);
      const res = await axios.post('http://localhost:5292/api/Auth/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const token = res.data.token;
      if (token) {
        localStorage.setItem('token', token);
        alert('Login successful!');
        navigate('/dashboard');
      } else {
        alert('Login failed: No token received.');
      }
    } catch (err) {
      alert('Login failed. Please check your credentials.');
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="auth-container d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <img src={logo} alt="Cutipets Logo" className="mb-4" style={{ width: '120px' }} />
      <div className="card p-4 shadow-sm" style={{ width: '350px' }}>
        <h4 className="text-center mb-3">Login</h4>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
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
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <p>Not registered yet? <a href="/register">Register here</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
