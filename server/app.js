const express = require('express');
const cors = require('cors');
const { scrapePrice } = require('./services/scrape.service');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.get('/api/', async (req, res) => {
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

app.listen(PORT, () => console.info('Server listening on port ' + PORT));
