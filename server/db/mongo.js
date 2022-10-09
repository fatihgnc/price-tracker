const { MongoClient } = require('mongodb');
const { DB_URI } = require('../utils/constants');

module.exports = class Mongo {
  constructor() {
    this._db = null;
    this.client = null;
    this.collections = {};
  }
  async initClient() {
    if (this.client) {
      return console.error('Mongo is already up.');
    }
    this.client = new MongoClient(DB_URI);

    try {
      await this.client.connect();
      this._db = this.client.db();
      this.#addCollection('users');
      this.#addCollection('products');
      console.info(`Connected to Mongo successfully.`);
    } catch (error) {
      console.error(
        `Error occurred while connecting to Mongo: ${error?.message}`
      );
    }
  }
  #addCollection(collectionName) {
    if (!collectionName || typeof collectionName !== 'string') {
      return console.error('Invalid collections value!');
    }
    this.collections[collectionName] = this._db.collection(collectionName);
  }
};
