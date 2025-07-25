import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './PetListing.css'; // create this for styling

const PetListing = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({ category: '', gender: '', age: '', price: '' });

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/pets');
      setPets(res.data);
    } catch (err) {
      console.error('Error fetching pets:', err);
    }
  };

  const handleFilter = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/pets/filter', { params: filters });
      setPets(res.data);
    } catch (err) {
      console.error('Filter failed', err);
    }
  };

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between mb-3">
        <h2>Available Pets</h2>
        <Link to="/sell-pet" className="btn btn-primary">Sell Your Pet</Link>
      </div>

      {/* Search and Filter */}
      <div className="row mb-4">
        <div className="col-md-4">
          <input
            type="text"
            placeholder="Search by name"
            className="form-control"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <select className="form-select" onChange={(e) => setFilters({ ...filters, category: e.target.value })}>
            <option value="">Category</option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
          </select>
        </div>

        <div className="col-md-2">
          <select className="form-select" onChange={(e) => setFilters({ ...filters, gender: e.target.value })}>
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        <div className="col-md-2">
          <input
            type="number"
            className="form-control"
            placeholder="Age"
            onChange={(e) => setFilters({ ...filters, age: e.target.value })}
          />
        </div>

        <div className="col-md-2">
          <button className="btn btn-success w-100" onClick={handleFilter}>Filter</button>
        </div>
      </div>

      {/* Pet Cards */}
      <div className="row">
        {filteredPets.map((pet) => (
          <div className="col-md-4 mb-4" key={pet.id}>
            <div className="card h-100">
              <img src={pet.image} className="card-img-top" alt={pet.name} />
              <div className="card-body">
                <h5 className="card-title">{pet.name}</h5>
                <p className="card-text">{pet.description}</p>
                <p><strong>Category:</strong> {pet.category}</p>
                <p><strong>Age:</strong> {pet.age}</p>
                <p><strong>Gender:</strong> {pet.gender}</p>
                <p><strong>Price:</strong> ₹{pet.price}</p>
                <span className="badge bg-info">{pet.isForAdoption ? "Available for Adoption" : "For Sale"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetListing;
