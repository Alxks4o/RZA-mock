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
const BookingHotel = require('./models/bookingHotelSchema.models');
const BookingZoo = require('./models/bookingZooSchema.models');

// Create a route to handle form submissions
app.post('/api/bookingsHotel', async (req, res) => {
  const { forename, surname, people, checkInDate, checkOutDate, user } = req.body;

  // Validate incoming data
  if (!forename || !surname || !people || !checkInDate || !checkOutDate) {
    return res.status(400).json({ message: 'All fields are required!' });
  }

  const newBookingHotel = new BookingHotel({
    forename,
    surname,
    people,
    checkInDate,
    checkOutDate,
    user
  });

  try {
    const savedBookingHotel = await newBookingHotel.save();
    res.status(201).json(savedBookingHotel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.post('/api/bookingsZoo', async (req, res) => {
  const { forename, surname, adults, children, date } = req.body;

  // Validate incoming data
  if (!forename || !surname || adults === undefined || children === undefined || !date) {
    console.log('Validation Failed:', { forename, surname, adults, children, date });
    return res.status(400).json({ message: 'All fields are required!' });
  }

  const newBookingZoo = new BookingZoo({
    forename,
    surname,
    adults,
    children,
    date // Store date as a string
  });

  try {
    const savedBookingZoo = await newBookingZoo.save();
    res.status(201).json(savedBookingZoo);
  } catch (err) {
    console.error('Error Saving Booking:', err);
    res.status(400).json({ message: err.message });
  }
});


// Router for users
const usersRouter = require('./routes/authUser');
const bookingsRouter = require('./routes/bookings');

app.use('/users', usersRouter);
app.use('/bookings', bookingsRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

module.exports = app;
