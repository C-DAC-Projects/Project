const express = require("express");
const router = express.Router();
const {
  getAllPets,
  sellPet,
  filterPets,
  getPetById
} = require("../controllers/petController");

router.get("/", getAllPets);
router.post("/sell", sellPet);
router.get("/filter", filterPets);
router.get("/:id", getPetById);

module.exports = router;
