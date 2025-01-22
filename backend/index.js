const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = process.env.PORT||3001
require('dotenv').config()

const app = express()


app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Import the Booking model
const Booking = require('./models/bookingSchema.models');

// Create a route to handle form submissions
app.post('/api/bookings', async (req, res) => {
  const { name, email, event, checkInDate, checkOutDate } = req.body;

  const newBooking = new Booking({
    name,
    email,
    event,
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

var usersRouter = require('./routes/authUser')


app.use('/users',usersRouter)



app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})


module.exports = app;