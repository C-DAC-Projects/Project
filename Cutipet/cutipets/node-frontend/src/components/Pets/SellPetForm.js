import React, { useState } from "react";
import axios from "axios";
import "./SellPetForm.css"; // External CSS file

const SellPetForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    category: "",
    description: "",
    price: "",
    isForAdoption: false,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("user_id");

    axios
      .post(
        "http://localhost:5000/api/pets",
        { ...formData, user_id: userId },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then(() => {
        alert("Pet submitted successfully!");
        setFormData({
          name: "", age: "", gender: "", category: "", description: "",
          price: "", isForAdoption: false, image: ""
        });
      })
      .catch((err) => {
        console.error(err.response?.data || err);
        alert("Failed to submit pet.");
      });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>Sell a Pet</h2>
      <input type="text" name="name" placeholder="Pet Name" value={formData.name} onChange={handleChange} required />
      <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} required />
      <select name="gender" value={formData.gender} onChange={handleChange} required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="text" name="category" placeholder="Category (e.g. Dog)" value={formData.category} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange} required />
      <label className="checkbox-label">
        <input type="checkbox" name="isForAdoption" checked={formData.isForAdoption} onChange={handleChange} />
        Available for Adoption
      </label>
      <button type="submit">Submit Pet</button>
    </form>
  );
};

export default SellPetForm;
