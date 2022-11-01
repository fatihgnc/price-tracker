const { MongoClient } = require('mongodb');
const { MONGO_URI, MONGO_OPTIONS } = require('../utils/constants');

const mongoClient = new MongoClient(MONGO_URI, MONGO_OPTIONS);

module.exports = async () => {
  try {
    // Connect to mongo
    await mongoClient.connect();
    console.log('Connected to MongoDB.');

    const mongo = mongoClient.db();

    // Create collections
    const usersCollection = mongo.collection('users');
    const productsCollection = mongo.collection('prices');

    // Create services
    const priceService = require('../services/price.service')({ mongo });
    const authService = require('../services/auth.service')({ mongo });

    // Export all assets
    return { priceService, authService, usersCollection, productsCollection };
  } catch (error) {
    console.log('Error while processing appContext: ', error);
  }
};
