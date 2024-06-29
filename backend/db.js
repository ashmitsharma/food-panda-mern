const mongoose = require('mongoose');

const mongoURI = ''

async function mongoDB() {
    try {
        await mongoose.connect(mongoURI);
        console.log('Connected to MongoDB');
        // Check if mongoose has a connection object
        if (mongoose.connection.readyState === 1) {
            console.log('Connection is open');
            // Fetch data from a specific collection (e.g., "food_items")
            const collection = mongoose.connection.db.collection('food_items');
            const foodCategorys = mongoose.connection.db.collection('foodCategory');
            // Use await to ensure the query completes before continuing
            global.food_items = await collection.find({}).toArray();
            global.foodCategory = await foodCategorys.find({}).toArray();


        } else {
            console.log('Connection failed');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}


module.exports = mongoDB();
