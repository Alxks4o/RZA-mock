var express = require('express');
var router = express.Router();
const {MongoClient} = require('mongodb');
var mongo = require('mongodb');

const databaseLink = "mongodb://127.0.0.1:27017/";

router.get('/', async function(req,res,next){
    try{
        const client = new MongoClient(databaseLink);
        const database = client.db('RZA');
        const collection = database.collection('bookinghotels');

        const bookings = await collection.find().toArray();

        res.json(bookings)

        client.close();
    }catch{
        res.status(500).json({error:"Could not load bookings"})
    }
});

router.get('/:booking', async function(req,res,next){
    try{
        var bookingid = req.params.booking;
        const client = new MongoClient(databaseLink);
        const database = client.db('RZA');
        const collection = database.collection('bookinghotels');

        const booking = await collection.findOne({
            _id: new mongo.ObjectId(bookingid)
        })

        res.json(booking);

        client.close();
    }catch{
        res.status(500).json({error:"Could not load site"})
    }
});


module.exports = router;