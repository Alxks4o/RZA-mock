const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 3001;
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/RZA', {})
  .then(() => console.log('Database connected!'))
  .catch((error) => console.error('connection error:', error));

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import the Booking model
const Booking = require('./models/bookingSchema.models');

// Create a route to handle form submissions
app.post('/api/bookingsHotel', async (req, res) => {
  const { forename, surname, people, checkInDate, checkOutDate } = req.body;

  // Validate incoming data
  if (!forename || !surname || !people || !checkInDate || !checkOutDate) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  const newBooking = new Booking({
    forename,
    surname,
    people,
    checkInDate,
    checkOutDate
  });

  try {
    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Router for users
var usersRouter = require('./routes/authUser');
app.use('/users', usersRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
