const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const router = express.Router();

router.get('/user/:email', async function(req, res, next) {
    const client = new MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });
    try {
        await client.connect();
        const database = client.db('RZA');
        const usersCollection = database.collection('users');
        const bookingsCollection = database.collection('bookinghotels');

        const userEmail = req.params.email;
        console.log(`Received request for user email: ${userEmail}`);

        // Find the user document by email
        const user = await usersCollection.findOne({ email: userEmail });
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const userId = user._id.toString();
        console.log(`User ID: ${userId}`);

        // Find bookings by user ID
        const bookings_db = await bookingsCollection.find({ user: userId }).toArray();
        console.log('Bookings from DB:', bookings_db);

        if (bookings_db.length >= 1) {
            res.json(bookings_db);
        } else {
            res.status(404).json({ error: "User has no bookings" });
        }
    } catch (error) {
        console.error('Error connecting to database or fetching user/bookings:', error);
        res.status(500).json({ error: "Could not get user or bookings" });
    } finally {
        await client.close();
    }
});

module.exports = router;
