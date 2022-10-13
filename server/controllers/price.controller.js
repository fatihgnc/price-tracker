const app = require('express');
const priceController = app.Router();

module.exports = ({ mongo }) => {
  priceController.get('/', async (req, res) => {
    const { url } = req.query;
    if (!url) {
      return res
        .status(400)
        .json({ error: true, message: 'An url must be provided.' });
    }
    try {
      const price = await scrapePrice(url);
      return res.json({ price });
    } catch (error) {
      res.json({ error: error.message });
    }
  });

  return priceController;
};
