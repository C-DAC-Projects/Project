// controllers/petController.js
const db = require('../config/db');

// GET all pets
const getAllPets = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM pets");
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving pets", error });
  }
};

// POST sell a pet
const sellPet = async (req, res) => {
  try {
    const {
      name,
      age,
      gender,
      category,
      description,
      price,
      isForAdoption,
      image,
      user_id
    } = req.body;

    const [result] = await db.query(
      "INSERT INTO pets (name, age, gender, category, description, price, isForAdoption, image, user_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [name, age, gender, category, description, price, isForAdoption, image, user_id]
    );

    res.status(201).json({ message: "Pet added successfully", petId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: "Error adding pet", error });
  }
};

// Filter pets by category
const filterPets = async (req, res) => {
  try {
    const { category } = req.query;
    const [rows] = await db.query("SELECT * FROM pets WHERE category = ?", [category]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ message: "Error filtering pets", error });
  }
};

// Get pet by ID
const getPetById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query("SELECT * FROM pets WHERE id = ?", [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: "Pet not found" });
    }
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving pet", error });
  }
};

module.exports = {
  getAllPets,
  sellPet,
  filterPets,
  getPetById,
};
