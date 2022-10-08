const app = require('express');
const priceRouter = app.Router();

priceRouter.get('/', async (req, res) => {
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

module.exports = priceRouter;
