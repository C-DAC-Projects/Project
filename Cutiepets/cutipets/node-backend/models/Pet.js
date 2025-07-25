const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Define the Pet model
const Pet = sequelize.define('Pet', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {  // e.g., Dog, Cat, Bird
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING, // store image URL or filename
    allowNull: true,
  },
  forAdoption: {
    type: DataTypes.BOOLEAN,
    defaultValue: false, // true if free for adoption
  }
}, {
  tableName: 'pets', // optional: custom table name
  timestamps: true,  // adds createdAt & updatedAt
});

module.exports = Pet;
