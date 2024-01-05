const app = require('express');
const priceController = app.Router();

module.exports = ({ priceService }) => {
  priceController.get('/', async (req, res) => {
    const { url } = req.query;
    if (!url) {
      return res
        .status(400)
        .json({ error: true, message: 'An url must be provided.' });
    }
    try {
      const product = await priceService.scrapeProduct(url);
      return res.json({ ...product });
    } catch (error) {
      res.status(400).json({ error: error.message || 'Something went wrong!' });
    }
  });

  return priceController;
};
