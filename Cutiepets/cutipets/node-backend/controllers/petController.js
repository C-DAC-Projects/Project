const db = require('../config/db');

// Get all pets (for sale + adoption)
exports.getAllPets = (req, res) => {
  const query = 'SELECT * FROM pets';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Sell a new pet
exports.sellPet = (req, res) => {
  const { name, category, age, gender, description, price, image, isForAdoption } = req.body;

  if (!name || !category || !age || !gender || !description || !price || !image) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = `
    INSERT INTO pets (name, category, age, gender, description, price, image, isForAdoption)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    query,
    [name, category, age, gender, description, price, image, isForAdoption],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ message: 'Pet listed successfully!', petId: result.insertId });
    }
  );
};

// Filter pets
exports.filterPets = (req, res) => {
  const { category, age, gender, minPrice, maxPrice } = req.query;

  let query = 'SELECT * FROM pets WHERE 1=1';
  const values = [];

  if (category) {
    query += ' AND category = ?';
    values.push(category);
  }
  if (age) {
    query += ' AND age = ?';
    values.push(age);
  }
  if (gender) {
    query += ' AND gender = ?';
    values.push(gender);
  }
  if (minPrice) {
    query += ' AND price >= ?';
    values.push(minPrice);
  }
  if (maxPrice) {
    query += ' AND price <= ?';
    values.push(maxPrice);
  }

  db.query(query, values, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Get pet by ID (optional)
exports.getPetById = (req, res) => {
  const petId = req.params.id;
  const query = 'SELECT * FROM pets WHERE id = ?';

  db.query(query, [petId], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ error: 'Pet not found' });
    res.json(results[0]);
  });
};
