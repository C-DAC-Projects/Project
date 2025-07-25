const express = require('express');
const cors = require('cors');
const petRoutes = require('./routes/petRoutes'); // ✅ Correct path

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // ✅ Required for POST body
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/pets', petRoutes); // ✅ Mounts all pet routes

// Default route
app.get('/', (req, res) => {
  res.send('API is running');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
