const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const petRoutes = require('./routes/petRoutes');
// other routes: productRoutes, appointmentRoutes...

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/pets', petRoutes);

module.exports = app;
