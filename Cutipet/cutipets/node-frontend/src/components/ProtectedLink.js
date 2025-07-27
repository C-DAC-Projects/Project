// components/ProtectedLink.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedLink = ({ to, children }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    const isLoggedIn = localStorage.getItem('user');
    if (!isLoggedIn) {
      e.preventDefault();
      alert("Please login to continue");
    } else {
      navigate(to);
    }
  };

  return (
    <li className="nav-item">
      <a className="nav-link" href={to} onClick={handleClick}>
        {children}
      </a>
    </li>
  );
};

export default ProtectedLink;
