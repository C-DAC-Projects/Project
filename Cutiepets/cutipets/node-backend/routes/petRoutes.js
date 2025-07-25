const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');

// Get all pets (for sale or adoption)
router.get('/', petController.getAllPets);

// Sell a new pet
router.post('/sell', petController.sellPet);

// Filter pets (by category, age, gender, price)
router.get('/filter', petController.filterPets);

// Get pet by ID (optional)
router.get('/:id', petController.getPetById);

module.exports = router;
