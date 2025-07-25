// src/components/Pets/PetListing.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const PetListing = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    age: "",
    gender: "",
    maxPrice: "",
  });

  const fetchPets = () => {
    axios.get("http://localhost:5000/api/pets")
      .then((res) => setPets(res.data))
      .catch((err) => console.error("Error:", err));
  };

  useEffect(() => {
    fetchPets();
  }, []);

  const handleSearch = (e) => setSearch(e.target.value);

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredPets = pets.filter((pet) => {
    return (
      pet.name.toLowerCase().includes(search.toLowerCase()) &&
      (filters.category ? pet.category === filters.category : true) &&
      (filters.age ? pet.age === parseInt(filters.age) : true) &&
      (filters.gender ? pet.gender === filters.gender : true) &&
      (filters.maxPrice ? pet.price <= parseFloat(filters.maxPrice) : true)
    );
  });

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="text-primary">All Available Pets</h2>
        <Link to="/sell-pet" className="btn btn-success">+ Sell Your Pet</Link>
      </div>

      {/* Search + Filters */}
      <div className="row mb-4">
        <div className="col-md-3 mb-2">
          <input type="text" className="form-control" placeholder="Search by name" value={search} onChange={handleSearch} />
        </div>
        <div className="col-md-2 mb-2">
          <select className="form-select" name="category" onChange={handleFilterChange}>
            <option value="">All Categories</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Rabbit">Rabbit</option>
          </select>
        </div>
        <div className="col-md-2 mb-2">
          <select className="form-select" name="age" onChange={handleFilterChange}>
            <option value="">All Ages</option>
            <option value="1">1 year</option>
            <option value="2">2 years</option>
            <option value="3">3 years</option>
          </select>
        </div>
        <div className="col-md-2 mb-2">
          <select className="form-select" name="gender" onChange={handleFilterChange}>
            <option value="">Any Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="col-md-3 mb-2">
          <input type="number" className="form-control" name="maxPrice" placeholder="Max Price" onChange={handleFilterChange} />
        </div>
      </div>

      {/* Display Pets */}
      <div className="row">
        {filteredPets.length > 0 ? (
          filteredPets.map((pet) => (
            <div className="col-md-4 mb-4" key={pet.id}>
              <div className="card shadow">
                <img src={pet.image} className="card-img-top" alt={pet.name} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title">{pet.name}</h5>
                  <p className="card-text"><strong>Age:</strong> {pet.age} years</p>
                  <p className="card-text"><strong>Gender:</strong> {pet.gender}</p>
                  <p className="card-text"><strong>Category:</strong> {pet.category}</p>
                  <p className="card-text">{pet.description}</p>
                  {pet.isForAdoption ? (
                    <span className="badge bg-success">Adopt</span>
                  ) : (
                    <span className="badge bg-warning text-dark">For Sale - ₹{pet.price}</span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No pets found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default PetListing;
