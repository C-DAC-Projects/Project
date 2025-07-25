import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Dashboard from './components/Dashboard';
import PetListing from './components/Pets/PetListing'; // ✅ ADD THIS
import SellPetForm from "./components/Pets/SellPetForm"; // we'll create this next

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pets" element={<PetListing />} /> {/* ✅ PET LISTING */}
        <Route path="/sell-pet" element={<SellPetForm />} />


      </Routes>
    </Router>
  );
}

export default App;
